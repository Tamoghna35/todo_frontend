import React from 'react'

import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import "./SignIn.css"
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigateHook = useNavigate()
  return (
    <div className="signUpForm">
      <div className="formFields">
        <div className="fields">
          <label htmlFor="">Enter Username or Email</label>
          <InputText
            id="username"
            placeholder="Usernsme"
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
          label="Next"
          icon="pi pi-sign-in"
          iconPos="right"
          onClick={() => navigateHook("/todomain")}
          className="buttonStyle"
        />
      </div>
    </div>
  );
}

export default SignIn