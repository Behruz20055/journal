import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { languageMenu } from "../../configs/i18nConfig";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";

import classes from "./Navbar.module.css";
import navbarLogo from "../../assets/images/logo.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={classes["navbar-wrapper"]}>
      <div className={classes["top-bar"]}>
        <div className={classes["forword"]}>
          <div className={classes["language-switcher"]}>
            {languageMenu.map((lang) => (
              <span
                key={lang.id}
                className={`${classes["lang"]} ${
                  i18n.language === lang.code ? classes["active-lang"] : ""
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                <img
                  src={lang.icon}
                  alt={lang.title}
                  className={classes["lang-icon"]}
                />{" "}
                {lang.shortTitle}
              </span>
            ))}
          </div>
          <div className={classes["auth-links"]}>
            <Link to="/login" className={classes["auth-link"]}>
              {t("login")}
            </Link>
            <Link to="/register" className={classes["auth-link2"]}>
              {t("register")}
            </Link>
          </div>
        </div>
      </div>

      <div className={classes["navbar"]}>
        <div className={classes["navbar-top-logo"]}>
          <Link to="/">
            <img
              className={classes["navbar-logo"]}
              src={navbarLogo}
              alt="logo"
            />
          </Link>
          <div className={classes["navbar-title"]}>
            <p className={classes["main-title"]}>{t("main_title")}</p>
            <p className={classes["subtitle"]}>{t("subtitle")}</p>
          </div>
        </div>

        <div className={classes["navbar-items"]}>
          <NavLink
            to="/"
            className={classes["nav-item"]}
            activeClassName={classes["active"]}
          >
            <span className={classes["nav-title"]}>{t("home")}</span>
            <span className={classes["nav-subtitle"]}>
              {t("home_subtitle")}
            </span>
          </NavLink>
          <span className={classes["divider"]}>|</span>
          <NavLink
            to="/editorial"
            className={classes["nav-item"]}
            activeClassName={classes["active"]}
          >
            <span className={classes["nav-title"]}>{t("editorial")}</span>
            <span className={classes["nav-subtitle"]}>
              {t("editorial_subtitle")}
            </span>
          </NavLink>
          <span className={classes["divider"]}>|</span>
          <NavLink
            to="/journal-all"
            className={classes["nav-item"]}
            activeClassName={classes["active"]}
          >
            <span className={classes["nav-title"]}>{t("archive")}</span>
            <span className={classes["nav-subtitle"]}>
              {t("archive_subtitle")}
            </span>
          </NavLink>
          <span className={classes["divider"]}>|</span>
          <NavLink
            to="/news"
            className={classes["nav-item"]}
            activeClassName={classes["active"]}
          >
            <span className={classes["nav-title"]}>{t("news")}</span>
            <span className={classes["nav-subtitle"]}>
              {t("news_subtitle")}
            </span>
          </NavLink>
          <span className={classes["divider"]}>|</span>
          <NavLink
            to="/ethics"
            className={classes["nav-item"]}
            activeClassName={classes["active"]}
          >
            <span className={classes["nav-title"]}>{t("ethics")}</span>
            <span className={classes["nav-subtitle"]}>
              {t("ethics_subtitle")}
            </span>
          </NavLink>
          <span className={classes["divider"]}>|</span>
          <NavLink
            to="/journal-send"
            className={classes["nav-item"]}
            activeClassName={classes["active"]}
          >
            <span className={classes["nav-title"]}>{t("authors")}</span>
            <span className={classes["nav-subtitle"]}>
              {t("authors_subtitle")}
            </span>
          </NavLink>
        </div>

        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
