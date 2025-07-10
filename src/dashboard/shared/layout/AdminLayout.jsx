import React, { useState } from "react";

import Sidebar from "./sidebar/Sidebar";
import TopBar from "./topBar/TopBar";
import Pages from "../../../shared/routes/Pages";

import classes from "./AdminLayout.module.css";

const AdminLayout = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes["dashboard-page"]}>
      <Sidebar routes={routes} isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className={classes["bg"]}></div>
      )}
      <div className={classes["main-part"]}>
        <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={classes["pages-wrapper"]}>
          <Pages />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
