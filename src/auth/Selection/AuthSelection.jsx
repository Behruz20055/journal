import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./AuthSelection.module.css";

const AuthSelection = () => {
  const navigate = useNavigate();

  return (
    <div className={classes["right-side"]}>
      <p className={classes["main-title"]}>Get Started</p>
      <div className={classes["buttons-wrapper"]}>
        <div
          className={classes["button"]}
          onClick={() => navigate("/auth-login")}
        >
          <p>Log in</p>
        </div>
        <div
          className={classes["button"]}
          onClick={() => navigate("/auth-register")}
        >
          <p>Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default AuthSelection;
