import React from "react";
import "./SignUp.css";

const SignUp = ({ onRouteChange }) => {
  return (
    <div className="SignAll">
      <div className="SignAll-SignUp" onClick={() => onRouteChange("SignIn")}>
        <p className="SignAll-SignUp-text">Sign In</p>
      </div>
      <div className="SignUp">
        <div className="SignUp-header">
          <p>Sign Up</p>
        </div>
        <div className="SignUp-Form">
          <div className="SignUp-Form-input">
            <p>Email</p>
            <input type="email" placeholder="Enter Your Email" />
            <p>Password</p>
            <input type="password" placeholder="Enter Your Password" />
            <p>ReEnter Password</p>
            <input type="password" placeholder="ReEnter Your Password" />
          </div>
          <div className="SignUp-Form-google">
            <img
              width="80px"
              height="80px"
              src="https://img.icons8.com/color/480/000000/google-logo.png"
            />
          </div>
        </div>
        <div className="SignUp-button">
          <button className="SignUp-button-text">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
