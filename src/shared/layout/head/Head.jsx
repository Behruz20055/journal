import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ ...props }) => {
  return (
    <Helmet>
      <title>
        {props.title ? props.title + " | " : null} Renessans ta'lim universiteti
      </title>
    </Helmet>
  );
};
export default Head;
