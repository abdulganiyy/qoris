import React from "react";
import classes from "./Hero.module.css";
import Button from "../UI/Button/Button";

const hero = (props) => {
  return (
    <div className={classes.Hero}>
      <div className={classes.HeroContent}>
        <h1>Leading Security Solutions Provider </h1>
        <p>
          We provide the best solutions to security problems using topnotch
          technology
        </p>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
};

export default hero;
