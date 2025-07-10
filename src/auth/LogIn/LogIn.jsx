import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Head from "../../shared/layout/head/Head";

import classes from "./LogIn.module.css";

import eye from "../../shared/assets/images/icons/eye.svg";
import hide from "../../shared/assets/images/icons/eye-hide.svg";

const LogIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <>
      <Head title="Login" />
      <div className={classes["logIn"]}>
        <div className={classes["container"]}>
          <div className={classes["logInSection"]}>
            <div className={classes["leftSection"]}>
              <form>
                <h3>Tizimga kirish</h3>
                <div className={classes["inputSection"]}>
                  <input
                    placeholder="Telefoningiz"
                    className={classes["input"]}
                  />
                  <div className={classes["inputEye"]}>
                    <input
                      placeholder="Parolingiz"
                      className={classes["input"]}
                      type={type}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                    <div onClick={handleToggle}>
                      {type === "password" ? (
                        <img
                          src={eye}
                          alt="eye"
                          width={24}
                          height={24}
                          className={classes["eye"]}
                        />
                      ) : (
                        <img
                          src={hide}
                          alt="eye"
                          width={24}
                          height={24}
                          className={classes["eye"]}
                        />
                      )}
                    </div>
                  </div>
                  <div className={classes["forgotPass"]}>
                    <div className={classes["checkBox"]}>
                      <input type="checkbox" />
                      <label className={classes["passParag"]}>
                        Meni eslab qoling
                      </label>
                    </div>
                    <button className={classes["forgotButton"]}>
                      Parolni unutdingizmi?
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/admin/news")}
                  className={classes["send"]}
                >
                  Kirish
                </button>
                <div className={classes["forRegister"]}>
                  <p className={classes["newUser"]}>
                    Yangi foydalanuvchimisiz?
                  </p>
                  <Link to="/auth-register">
                    <button className={classes["registerButton"]}>
                      Ro‘yxatdan o‘tish
                    </button>
                  </Link>
                </div>
              </form>
            </div>
            <div className={classes["rightSection"]}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
