import React, { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const SignIn = ({ login }) => {
  // console.log("Checking login Props in SignIn component===>", login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateHook = useNavigate();

  const handleEmailSubmit = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signinFormSubmit = async (e) => {
    e.preventDefault();
    const logInuser = {
      email,
      password,
    };
    await axios
      .post("http://localhost:8080/api/v1/users/logIn", logInuser)
      .then((response) => {
        console.log("SignIn user response===>", response.data);
        // Set the access token and refresh token in cookies
        const { accessToken, refreshToken } = response.data.data;
        console.log("Access Token in SignIn===>", accessToken);
        console.log("Refresh Token in SignIn===>", refreshToken);

        if (accessToken) {
          Cookies.set("accessToken", accessToken, {
            secure: true,
            sameSite: "Lax",
          });
        } else {
          console.error("No accessToken received from backend");
        }

        if (refreshToken) {
          Cookies.set("refreshToken", refreshToken, {
            secure: true,
            sameSite: "Lax",
          });
        } else {
          console.error("No refreshToken received from backend");
        }
        login();
        console.log(
          "Check loginfunction in signInComponent insithe then()===>",
          login()
        );

        navigateHook("/todomain");
      })
      .catch((error) => {
        console.error("Error while login user:", error);
      });
  };
  return (
    <div className="signUpForm">
      <form onSubmit={signinFormSubmit}>
        <div className="formFields">
          <div className="fields">
            <label htmlFor="">Enter Username or Email</label>
            <InputText
              id="username"
              placeholder="email"
              className="p-invalid mr-2"
              type="email"
              value={email}
              onChange={handleEmailSubmit}
            />
          </div>

          <div className="fields">
            <label htmlFor="Name">Add Password</label>
            <InputText
              id="password"
              placeholder="Password"
              type="password"
              className="p-invalid mr-2"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <div className="button-class">
          <Button
            label="Next"
            icon="pi pi-sign-in"
            iconPos="right"
            // onClick={() => navigateHook("/todomain")}
            className="buttonStyle"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
