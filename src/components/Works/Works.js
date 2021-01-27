import React from "react";
import classes from "./Works.module.css";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const works = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Gallery}>
        <div className={classes.Item}>
          <img src={img1} alt="img1" />
        </div>
        <div className={classes.Item}>
          <img src={img2} alt="img2" />
        </div>
        <div className={classes.Item}>
          <img src={img3} alt="img3" />
        </div>
        <div className={classes.Item}>
          <img src={img4} alt="img4" />
        </div>
        <div className={classes.Item}>
          <img src={img5} alt="img5" />
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default works;
