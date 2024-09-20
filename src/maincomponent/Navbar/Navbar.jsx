import React from "react";
import { Button } from "primereact/button";
import "./NavbarStyle.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigateHook = useNavigate();
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
        <Button
          label="SignIn"
          icon="pi pi-sign-in"
          iconPos="right"
          onClick={()=> navigateHook("/signin")}
        />
      </div>
    </div>
  );
};

export default Navbar;
