import React from "react";
import "./SignIn.css";

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="SignAll">
      <div className="SignAll-SignUp" onClick={() => onRouteChange("SignUp")}>
        <p className="SignAll-SignUp-text">Sign Up</p>
      </div>
      <div className="SignIn">
        <div className="SignIn-header">
          <p>Sign In</p>
        </div>
        <div className="SignIn-Form">
          <div className="SignIn-Form-input">
            <p>Email</p>
            <input type="email" placeholder="Enter Your Email" />
            <p>Password</p>
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <div className="SignIn-Form-google">
            <img
              width="80px"
              height="80px"
              src="https://img.icons8.com/color/480/000000/google-logo.png"
            />
          </div>
        </div>
        <div className="SignIn-button" onClick={() => onRouteChange("Home")}>
          <button className="SignIn-button-text">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
