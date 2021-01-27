import React from "react";
import classes from "./Footer.module.css";

const footer = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.MapContainer}>
        <h4>Address</h4>
        <iframe
          title="office address"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d624.2276201650566!2d3.3927406091936803!3d6.572244351672026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1611581603213!5m2!1sen!2sng"
          width="100%"
          height="400px "
          // frameborder="0"
          // style="border:0;"
          // allowfullscreen=""
          aria-hidden="false"
          // tabindex="0"
        ></iframe>
      </div>

      <div>
        <ul>
          <li>
            Head Office : Miksi Shopping Complex, behind acietech Plaza,Ramat
            Street,Ogudu.
          </li>
          <li>08133458995, 09056999900</li>
          <li>qoris@yahoo.com</li>
          qoris@yahoo.com
        </ul>
      </div>
    </div>
  );
};

export default footer;
