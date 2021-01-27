import React from "react";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      {/* <div>Side bar icon</div> */}
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default toolbar;
