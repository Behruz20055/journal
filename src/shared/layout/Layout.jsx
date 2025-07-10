import React from "react";

import Navbar from "./navbar/Navbar";
import Pages from "../routes/Pages";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";

import classes from "./Layout.module.css";
import Top from "../components/top/Top";

const Layout = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.content}>
        <Pages />
        <Sidebar />
      </div>
      <Footer />
      <Top />
    </div>
  );
};

export default Layout;
