import React, { useState } from "react";
import { Turn } from "hamburger-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mainRoutes } from "../../routes/configs/mainRoutes";

import classes from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const active = ({ isActive }) => {
    return {
      color: isActive ? "var(--primary-color)" : "#000",
    };
  };

  return (
    <div className={classes["wrapper"]}>
      <Turn toggled={open} toggle={setOpen} />
      <div
        style={open ? { transform: "translateX(0)" } : null}
        className={classes["hamburger"]}
      >
        <div className={classes["nav-items"]}>
          {mainRoutes.map((item, index) => {
            return (
              item.visibleInNavbar && (
                <NavLink
                  key={index}
                  className={classes["item"]}
                  style={active}
                  to={item.path}
                  onClick={() => setOpen(() => false)}
                >
                  {item.text}
                </NavLink>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
