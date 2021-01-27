import classes from "./Testimonials.module.css";
import React from "react";

const testimonials = (props) => {
  return (
    <div className={classes.TestimonialsContainer}>
      <h2>What People Are Saying</h2>
      <div className={classes.Testimonials}>
        <div className={classes.Testimonial}>
          <div className={classes.TestimonialBody}>
            <h3>Excellent Service</h3>
            <i
              style={{ color: "#eee", float: "left", fontSize: "40px" }}
              className="fas fa-quote-left"
            ></i>
            <p>
              Your Support is really great especially when i need to retrive
              previously recorded videos, I now feel save as I can monitor my
              business from anywhere just accessing my mobile phone and PC. I
              will always refer Qoris Integrated Services anytime.
            </p>
            <i
              style={{ color: "#eee", float: "right", fontSize: "40px" }}
              className="fas fa-quote-right"
            ></i>
          </div>

          <div className={classes.TestimonialFooter}>
            <img
              src="https://randomuser.me/api/portraits/men/91.jpg"
              alt="comment1"
            />
            <h4>Aderinoye</h4>
            <h5>Derrick Consults</h5>
          </div>
        </div>
        <div className={classes.Testimonial}>
          <div className={classes.TestimonialBody}>
            <h3>Staff Attendance Issues Resolved</h3>
            <i
              style={{ color: "#eee", float: "left", fontSize: "40px" }}
              className="fas fa-quote-left"
            ></i>
            <p>
              Thank you for our time and attendane management system.We now have
              accurate monitoring and recording of resumption and closing time
              of our staff especially our factory workers
            </p>
            <i
              style={{ color: "#eee", float: "right", fontSize: "40px" }}
              className="fas fa-quote-right"
            ></i>
          </div>

          <div className={classes.TestimonialFooter}>
            <img
              src="https://randomuser.me/api/portraits/men/80.jpg"
              alt="comment2"
            />
            <h4>Bashar</h4>
            <h5>Maiden Bakery</h5>
          </div>
        </div>
        <div className={classes.Testimonial}>
          <div className={classes.TestimonialBody}>
            <h3>Professional CCTV Installation And Support</h3>
            <i
              style={{ color: "#eee", float: "left", fontSize: "40px" }}
              className="fas fa-quote-left"
            ></i>
            <p>
              Qoris Integrated Services delievered beyond what we expected, Our
              cameras were supplied and installed faster than we expected. Their
              service was topnotch and they are professional. They are highly
              recommended for their services.
            </p>

            <i
              style={{ color: "#eee", float: "right", fontSize: "40px" }}
              className="fas fa-quote-right"
            ></i>
          </div>
          <div className={classes.TestimonialFooter}>
            <img
              src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg"
              alt="comment3"
            />
            <h4>Akinmotan</h4>
            <h5>Capital Holdings</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonials;
