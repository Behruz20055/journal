import React from "react";
import { useTranslation } from "react-i18next";

import UserCard from "./components/UserCard";

import classes from "./index.module.css";

const Profile = () => {
  const { t } = useTranslation();

  const userData = {
    firstName: "Abdullokh",
    lastName: "Nigmatullaev",
    phoneNumber: "+998988880448",
    gmail: "country.abu@gmail.com",
    userImage: "userImage",
  };

  return (
    <div>
      <p className={classes["page-title"]}>{t("Profile")}</p>
      <UserCard userData={userData} />
    </div>
  );
};

export default Profile;
