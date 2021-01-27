import React from "react";
import classes from "./Logo.module.css";
import logoImg from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={logoImg} alt="qoris-logo" />
      </Link>
    </div>
  );
};

export default logo;
