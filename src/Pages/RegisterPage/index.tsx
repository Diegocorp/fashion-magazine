import React from "react";
import { RegisterPageStyles } from "./RegisterPageElements";

export default function RegisterPage() {
  return (
    <RegisterPageStyles>
      <span className="registerTitle">register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="Password"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login </button>
    </RegisterPageStyles>
  );
}
