import React from "react";
import Head from "../../shared/layout/head/Head";

import { Opener } from "./opener/Opener";
import Journal from "../journal/Journal";

export const Home = () => {
  return (
    <div>
      <Head title="Asosiy" />
      <Journal />
    </div>
  );
};
