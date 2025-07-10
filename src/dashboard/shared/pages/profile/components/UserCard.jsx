import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ImageDragZone from "./ImageDragZone";

import classes from "./UserCard.module.css";

const UserCard = ({ userData }) => {
  const { t } = useTranslation();

  const [firstName, setFirstName] = useState(userData.firstName ?? "");
  const [lastName, setLastName] = useState(userData.lastName ?? "");
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber ?? "");
  const [gmail, setGmail] = useState(userData.gmail ?? "");
  const [userImage, setUserImage] = useState(null);

  return (
    <div className={classes["user-card"]}>
      <img
        className={classes["user-image"]}
        src={userData.userImage}
        alt="user-image"
      />
      <div className={classes["input-col"]}>
        <label className={classes["input-label"]} htmlFor="firstName">
          {t("First name")}
          <input
            className={classes["input"]}
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className={classes["input-label"]} htmlFor="lastName">
          {t("Last name")}
          <input
            className={classes["input"]}
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>

      <div className={classes["input-col"]}>
        <label className={classes["input-label"]} htmlFor="number">
          {t("Phone Number")}
          <input
            className={classes["input"]}
            name="firstName"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label className={classes["input-label"]} htmlFor="gmail">
          {t("Gmail")}
          <input
            className={classes["input"]}
            name="gmail"
            type="gmail"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
          />
        </label>
      </div>

      <div className={classes["input-col"]}>
        <ImageDragZone userImage={userImage} setUserImage={setUserImage} />
      </div>
      <div className={classes["save-button"]}>{t("Save Changes")}</div>
    </div>
  );
};

export default UserCard;
