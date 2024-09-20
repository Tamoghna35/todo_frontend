import React from "react";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./SignUpStyle.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigateHook = useNavigate();
  return (
    <div className="signUpForm">
      <div className="formFields">
        <div className="fields">
          <label htmlFor="Name">Add Name or UserName</label>
          <InputText
            id="username"
            placeholder="Username"
            className="p-invalid mr-2"
          />
        </div>
        <div className="fields">
          <label htmlFor="Name">Add Email</label>
          <InputText
            id="email"
            placeholder="Email"
            className="p-invalid mr-2"
          />
        </div>

        <div className="fields">
          <label htmlFor="Name">Add Password</label>
          <InputText
            id="password"
            placeholder="Password"
            className="p-invalid mr-2"
          />
        </div>
      </div>
      <div className="button-class">
        <Button
          label="SignIn"
          icon="pi pi-sign-in"
          iconPos="right"
          onClick={() => navigateHook("/signin")}
          className="buttonStyle"
        />
      </div>
    </div>
  );
};

export default SignUp;
