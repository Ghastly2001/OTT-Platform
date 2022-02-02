import React, { useState } from "react";
import Footer from "./Footer";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://images-ext-2.discordapp.net/external/Fcr95-DEa3Z7AAzyupp7zIvh4LKwA7QY5H3KWIqJEVo/https/assets.stickpng.com/images/580b57fcd9996e24bc43c529.png?width=1179&height=663"
        />

        <button
          onClick={() => {
            setSignIn(true);
          }}
          className="loginScreen__button"
        >
          Sign In
        </button>

        <div className="loginScreen__gradient" />
        <div className="login__contents">
          <div className="loginScreen__body">
            {signIn ? (
              <SignUpScreen />
            ): (
              <>
              <h1>
                Unlimited movies, TV <br /> shows and more.
              </h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" />
                  {/* <label for="email">Email</label> */}
                  <button
                    onClick={() => {
                      setSignIn(true);  
                    }}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
            )}
            
          </div>
        </div>
      </div>
       {/*
      <div className="jumbotron">
        <div className="container_one">
          <div className="leftSection">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="rightSection">
            <video
              class="video__1"
              autoplay="true"
              playsinline
              muted
              loop
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            ></video>
            <img src="https://images-ext-2.discordapp.net/external/q5xwgDCKSpiJEdyV5n6CR26yO8iBQ-ionZA0NqxnE6E/https/assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
          </div>
        </div>
      </div>
      <div className="jumbotron2">
        <div className="rightSectionOftwo">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
          <div className="our-story-card-container">
            <div className="our-story-card-animation">
              <div className="our-story-card-animation-image">
                <img
                  alt=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                />
              </div>
              <div class="our-story-card-animation-text">
                <div id="" className="text-0" data-uia="">
                  Stranger Things
                </div>
                <div id="" className="text-1" data-uia="">
                  Downloading...
                </div>
              </div>
              <div className="gif">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" />
              </div>
            </div>
          </div>
        </div>
        <div className="rightSectionTwo">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </div> */}
    </div>
  );
}

export default LoginScreen;
