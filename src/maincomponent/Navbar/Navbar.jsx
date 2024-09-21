import React from "react";
import { Button } from "primereact/button";
import "./NavbarStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Navbar = ({ isLoggedInorNot, logout }) => {
  const navigateHook = useNavigate();

  const handleLogOut = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      const refreshToken = Cookies.get("refreshToken");
      console.log("AccessToken in Navbar===>", accessToken);
      console.log("RefreshToken in Navbar===>", refreshToken);

      if (!accessToken) {
        console.error("Access Token is not available for logout.");
        return;
      }

      // Make the logout request with the access token in the Authorization header
      await axios.post("http://localhost:8080/api/v1/users/logout", null, {
        withCredentials: true,
      });

      // Clear cookies after successful logout
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      // Call the logout function to update state
      logout();

      // Navigate back to the login page
      navigateHook("/signin");

      console.log("Successfully logged out.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">Todo</div>
      <div className="navbar-right">
        <Button
          label="Sign Up"
          icon="pi pi-user-plus"
          iconPos="right"
          onClick={() => navigateHook("/signup")}
        />
        {!isLoggedInorNot ? (
          <Button
            label="SignIn"
            icon="pi pi-sign-in"
            iconPos="right"
            onClick={() => navigateHook("/signin")}
          />
        ) : (
          <Button
            label="Logout"
            icon="pi pi-sign-out"
            iconPos="right"
            onClick={handleLogOut}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
