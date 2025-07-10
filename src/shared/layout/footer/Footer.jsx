import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import SocialMedias from "../../components/socialMedias/SocialMedias";
import { footerData } from "../../utils/footerData";
import classes from "./Footer.module.css";
import logo from "../../assets/images/main-logo.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const [locationName, setLocationName] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.hash === `#${locationName}`) {
      const openerElement = document.getElementById(locationName);
      openerElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [locationName]);

  return (
    <div className={classes["footer-wrapper"]}>
      <div className={classes["footer"]}>
        <div className={classes["footer-section"]}>
          <Link to="/">
            <img className={classes["footer-logo"]} src={logo} alt="logo" />
          </Link>
        </div>

        <div className={classes["footer-section"]}>
          <p className={classes["footer-description"]}>
            {t("«Renessans Ta'lim universiteti» Barcha huquqlar himoyalangan")}
            <br />
            {t("Copyright")}-{new Date().getFullYear()}
          </p>
          <p className={classes["footer-description"]}>
            {t("Toshkent shahar, Shayxontohur tumani,")}
            <br /> {t("mapBr1")} {t("mapBr")}
          </p>
          <SocialMedias />
        </div>

        <div className={classes["footer-section"]}>
          <p className={classes["footer-title"]}>{t("footer_subscribe")}</p>
          <p className={classes["footer-description"]}>
            {t("footer_followNews")}
          </p>
          <div className={classes["input-wrapper"]}>
            <input className={classes["footer-input"]} type="text" />
            <div className={classes["icon-wrapper"]}>
              <Icon
                className={classes["send-icon"]}
                icon="mingcute:send-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
