import React from "react";
import classes from "./NavigationItems.module.css";
import { NavLink } from "react-router-dom";

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <li>
        <NavLink to="/works">Works</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </ul>
  );
};

export default navigationItems;
