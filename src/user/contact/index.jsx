import React from "react";
import { useTranslation } from "react-i18next";
import Head from "../../shared/layout/head/Head";

import classes from "./index.module.css";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={classes["wrapper"]}>
      <Head title="Contact" />
    </div>
  );
};
