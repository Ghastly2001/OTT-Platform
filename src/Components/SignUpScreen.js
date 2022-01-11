import React from 'react'
import "./SignUpScreen.css";
import { Link } from "react-router-dom";

function SignUpScreen() {
    return (
        <div>
          <a className="logo" href="https://www.netflix.com/" target="_blank"></a>
<div className="login">
  <h1 className="login__title">Sign In</h1>
  <div className="login__group">
    <input className="login__group__input" type="text" required="true"/>
    <label className="login__group__label">Email or phone number</label>
  </div>
  <div className="login__group">
    <input className="login__group__input" type="password" required="true"/>
    <label className="login__group__label">Password</label>
  </div>
  <Link to="/">
  <button className="login__sign-in" type="button">Sign In</button>
  </Link>
  <div className="login__secondary-cta"><a class="login__secondary-cta__text" href="#">Remember me</a><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a></div>
</div>
        </div>
    )
}

export default SignUpScreen
