import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Turn } from "hamburger-react";

import classes from "./Sidebar.module.css";

import logo from "../../../../shared/assets/images/logo.png";
import { GenericModal } from "../../../../shared/components/modal/Modal";

const Sidebar = ({ routes, isOpen, setIsOpen }) => {
  const active = ({ isActive }) => {
    return {
      borderLeft: isActive
        ? "5px solid var(--primary-color)"
        : "5px solid var(--bg-white-color)",
    };
  };

  return (
    <div
      style={isOpen ? { left: "0px" } : { left: "-100%" }}
      className={classes["sidebar"]}
    >
      <div className={classes["sidebar-header"]}>
        <div className={classes["hamburger"]}>
          <Turn toggle={setIsOpen} toggled={isOpen} />
        </div>
        <img className={classes["logo"]} src={logo} alt="logo" />
      </div>
      <div className={classes["sidebar-items"]}>
        {routes.map((item, index) => {
          return (
            item.visibleInNavbar && (
              <NavLink
                style={active}
                className={classes["item"]}
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <Icon width={"22px"} icon={item.icon} /> {item.text}
              </NavLink>
            )
          );
        })}
        <NavLink
          style={{ marginLeft: "6px" }}
          to={"/auth"}
          className={classes["item"]}
        >
          <Icon width={"22px"} icon={"solar:exit-bold"} />
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
