import React from "react";
import LottieView from "lottie-react";

import TypingAnimation from "../../shared/components/typingAnimation/TypingAnimation";
import LoginAnimation from "../../shared/assets/animated-placeholders/Login.json";
import AuthHeader from "../AuthHeader/AuthHeader";

import classes from "./LeftSide.module.css";

const LeftSide = () => {
  return (
    <div className={classes["component-wrapper"]}>
      <AuthHeader />
      <div>
        <LottieView
          className={classes["animation"]}
          animationData={LoginAnimation}
          loop={true}
        />
        <TypingAnimation
          className={classes["text"]}
          text={[
            `Welcome to our community!`,
            `We're thrilled to have you on board.`,
            `Log in or
          sign up to access exclusive content and personalized features.`,
          ]}
        />
      </div>
    </div>
  );
};

export default LeftSide;
