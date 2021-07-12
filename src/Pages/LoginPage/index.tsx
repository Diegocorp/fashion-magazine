import React from "react";
import { LoginPageStyles } from "./LoginPageElements";

export default function LoginPage() {
  return (
    <LoginPageStyles>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="Password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register </button>
    </LoginPageStyles>
  );
}
