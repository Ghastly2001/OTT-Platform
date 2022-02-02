import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import SignUpFooter from "./SignUpFooter";
import { Link } from "react-router-dom"
import Home from "./Home";
function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signInGoogle = () => {
    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        alert(error.message);
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        return <Home />
        console.log(user);
      })
      .catch((err) => {
        alert("User not Found");
      });
  };
  return (
    <>
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Paassword" type="password" />
        <Link to="/">
        <button type="submit" onClick={signIn}>Sign In</button>
        </Link>
        <h4>
          <span className="signupScreen__gray">New to Netflix ? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
          <button type="button" class="login-with-google-btn" onClick={signInGoogle} >
  Sign in with Google
</button>
        </h4>
      </form>
    </div>
     <SignUpFooter /></>
  );
}

export default SignUpScreen;
