import React from "react";
import { useNavigate } from "react-router-dom";
import { Turn } from "hamburger-react";

import classes from "./TopBar.module.css";

import LanguageDropDownComponent from "../../../../shared/components/languageDropdown/LanguageDropDownComponent";

const TopBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <div className={classes["top-bar"]}>
      <div className={classes["hamburger"]}>
        <Turn toggle={setIsOpen} toggled={isOpen} />
      </div>

      <div className={classes["right-side"]}>
        <LanguageDropDownComponent />

        <div
          onClick={() => navigate("/admin/profile")}
          className={classes["user-info"]}
        >
          <p className={classes["user-fullName"]}>Nigmatullaev Abdullokh</p>
          <div className={classes["user-image-wrapper"]}>
            <img
              className={classes["user-image"]}
              src={"userImage"}
              alt="user-image"
            />
            <div className={classes["user-online"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
