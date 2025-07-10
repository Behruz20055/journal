import React from "react";
import LottieView from "lottie-react";
import { useNavigate } from "react-router-dom";

import classes from "./Error404Page.module.css";

import Error404Animation from "../assets/animated-placeholders/Error404.json";

const Error404Page = () => {
  const navigate = useNavigate();

  return (
    <div className={classes["error-page"]}>
      <LottieView
        className={classes["animation"]}
        animationData={Error404Animation}
        loop={true}
      />
      <p className={classes["title"]}>
        Uzr,
        <span>xatolik</span> ro‘y berdi!
      </p>
      <p className={classes["description"]}>
        Asosiy menuga qaytish uchun tugmani bosing.
      </p>
      <div onClick={() => navigate("/")} className={classes["button"]}>
        Asosiy menu
      </div>
    </div>
  );
};

export default Error404Page;
