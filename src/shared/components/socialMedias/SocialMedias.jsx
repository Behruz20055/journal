import React from "react";
import { Icon } from "@iconify/react";

import classes from "./SocialMedias.module.css";

const SocialMedias = ({
  team = false,
  instagramUrl,
  telegramUrl,
  githubUrl,
}) => {
  return (
    <div className={classes["social-medias"]}>
      {team ? (
        <>
          <a
            href={instagramUrl}
            target="_blank"
            className={classes["social-media-wrapper"]}
          >
            <Icon className={classes["social-media"]} icon="mdi:instagram" />
          </a>

          <a
            href={telegramUrl}
            target="_blank"
            className={classes["social-media-wrapper"]}
          >
            <Icon
              className={classes["social-media"]}
              icon="ic:baseline-telegram"
            />
          </a>

          <a
            href={githubUrl}
            target="_blank"
            className={classes["social-media-wrapper"]}
          >
            <Icon
              className={classes["social-media"]}
              icon="mingcute:github-fill"
            />
          </a>
        </>
      ) : (
        <>
          <div className={classes["social-media-wrapper"]}>
            <Icon className={classes["social-media"]} icon="mdi:instagram" />
          </div>

          <div className={classes["social-media-wrapper"]}>
            <Icon className={classes["social-media"]} icon="ri:facebook-fill" />
          </div>

          <div className={classes["social-media-wrapper"]}>
            <Icon
              className={classes["social-media"]}
              icon="ic:baseline-telegram"
            />
          </div>

          <div className={classes["social-media-wrapper"]}>
            <Icon className={classes["social-media"]} icon="mdi:youtube" />
          </div>
        </>
      )}
    </div>
  );
};

export default SocialMedias;
