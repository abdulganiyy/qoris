import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElem = null;

  let inputElemClasses = [classes.InputElem];

  switch (props.elementType) {
    case "input":
      inputElem = (
        <input
          className={inputElemClasses.join(" ")}
          value={props.value}
          placeholder={props.elementConfig.placeholder}
          type={props.elementConfig.type}
        />
      );
      break;
    case "textarea":
      inputElem = (
        <textarea
          className={inputElemClasses.join(" ")}
          value={props.value}
          placeholder={props.elementConfig.placeholder}
          type={props.elementConfig.type}
        />
      );
      break;
    default:
      inputElem = (
        <input
          className={inputElemClasses.join(" ")}
          value={props.value}
          placeholder={props.elementConfig.placeholder}
          type={props.elementConfig.type}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label>{props.name}</label>
      {inputElem}
    </div>
  );
};

export default input;
