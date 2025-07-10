import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

// assets
import doneIcon from "./assets/icons/done.svg";
import arrow from "./assets/icons/arrow.svg";
import book from "./assets/imgs/book2.webp";
import bgImg1 from "./assets/imgs/pen2.png";

import classes from "./Opener.module.css";

export const Opener = () => {
  const { t } = useTranslation();

  return (
    <div id="opener" className={classes["wrapper"]}>
      <div data-aos="fade-up" className={classes["container"]}>
        <h1 className={classes["title"]}>
          <span className="span_blue">{t(`openerTitleSpan`)}</span>{" "}
          {t(`openerTitle`)}
        </h1>
        <p className={classes["descr"]}>{t(`openerDescr`)}</p>
        <div className={classes["flex"]}>
          <a href="#hackathon">
            <button className={classes["btn1"]}>
              {t(`startbutton`)}
              <img src={arrow} alt="arrow" />
            </button>
          </a>
          <a target="_blank" href="https://digitalolmazor.uz/">
            <button className={classes["btn2"]}>
              <Icon className={classes["earth_icon"]} icon="icon-park:earth" />
              DigitalOlmazor
            </button>
          </a>
        </div>
        <div className={classes["status_flex"]}>
          <img src={doneIcon} alt="doneIcon" />
          <div>
            <p className={classes["status_text1"]}>
              {t(`Shavkat Mirziyoyev Miromonovich`)}
            </p>
            <p className={classes["status_text2"]}>{t(`smartWords`)}</p>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-down"
        className={classes["bg-img2"]}
        src={book}
        alt=""
      />
      <img
        data-aos="fade-up"
        className={classes["bg-img1"]}
        src={bgImg1}
        alt=""
      />
      {/* imgs */}
    </div>
  );
};
