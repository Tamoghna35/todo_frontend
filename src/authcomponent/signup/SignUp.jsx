import React, { useState } from "react";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./SignUpStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpFormSubmit = async (e) => {
    e.preventDefault();
    const registerUserData = {
      name,
      email,
      password,
    };
    console.log("Register User data===>", registerUserData);
    axios
      .post("http://localhost:8080/api/v1/users/registerUser", registerUserData)
      .then((response) => {
        console.log(response.data);
        navigateHook("/signin");
      })
      .catch((error) => {
        console.error("Error registering user:", error.response.data.message);
      });
  };

  const navigateHook = useNavigate();
  return (
    <div className="signUpForm">
      <form onSubmit={handleSignUpFormSubmit}>
        <div className="formFields">
          <div className="fields">
            <label htmlFor="Name">Add Name or UserName</label>
            <InputText
              id="username"
              placeholder="Username"
              className="p-invalid mr-2"
              value={name}
              onChange={handleNameChange}
              type="name"
            />
          </div>
          <div className="fields">
            <label htmlFor="Name">Add Email</label>
            <InputText
              id="email"
              placeholder="Email"
              type="email"
              className="p-invalid mr-2"
              value={email}
              onChange={handleEmailChange}
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
            label="SignUp"
            icon="pi pi-sign-in"
            iconPos="right"
            type="submit"
            // onClick={() => navigateHook("/signin")}
            className="buttonStyle"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
