import React from "react";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import classes from "./Home.module.css";

const home = (props) => {
  return (
    <div>
      <Hero />
      <div className={classes.AboutContainer}>
        <div className={classes.AboutHeadings}>
          <h3>About Us</h3>
          <p>
            Qoris Intergrated Services is a leading surveillance and security
            systems deployment and support team focusing on video surveillance
            systems, time and attendance management systems as well as door
            access control solutions for offices. Our installation and
            maintenance services are offered across Nigeria.
          </p>
        </div>

        <div className={classes.AboutUs}>
          <div className={classes.Item}>
            <span style={{ fontSize: "3em", color: "#eee" }}>
              <i class="fas fa-camera"></i>
            </span>

            <h4>Who Are We</h4>
            <p>
              We are an electrical electronic engineering company.We provide
              expertise and genuine commitment to quality on every project, no
              matter the size, market or delivery method.
            </p>
          </div>
          <div className={classes.Item}>
            <span style={{ fontSize: "3em", color: "#eee" }}>
              <i class="fas fa-lightbulb"></i>
            </span>
            <h4>Our Mission</h4>

            <p>
              To be able to resolve your technical issues as prompt as possible,
              thereby laying a legacy of trust and a cordial relationship which
              would help us serve you better.
            </p>
          </div>
          <div className={classes.Item}>
            <span style={{ fontSize: "3em", color: "#eee" }}>
              <i class="fas fa-balance-scale"></i>
            </span>
            <h4>Our Vision</h4>
            <p>
              To create an enabling environment in which our client would be
              satisfied with the services we render and solution for your entire
              technical problem within the short period of time.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.ServicesContainer}>
        <h2>Our Services</h2>
        <div className={classes.Services}>
          <div>
            <span style={{ fontSize: "3em", color: "#003300" }}>
              <i class="far fa-lightbulb"></i>
            </span>
            <h4>Solar System And Inverter Installation</h4>
            <p>
              We provide solar system and inverter installation are highly
              efficient and very affordable cost. With Zictech Solar Package,
              you get up to 24hrs
            </p>
          </div>
          <div>
            <span style={{ fontSize: "3em", color: "#003300" }}>
              <i class="fas fa-city"></i>
            </span>
            <h4>Electrical Installation</h4>
            <p>
              We offer full and half house electrical conduit wiring for flats,
              duplexes, and all type of your residential and office…
            </p>
          </div>
          <div>
            <span style={{ fontSize: "3em", color: "#003300" }}>
              <i class="fas fa-camera"></i>
            </span>
            <h4>CCTV Camera Installation</h4>
            <p>
              We are professional and reliable company when it comes to
              Installation of CCTV Camera’s, Fire alarm system, Intercoms and
              other Security gadgets.
            </p>
          </div>
          <div>
            <span style={{ fontSize: "3em", color: "#003300" }}>
              <i class="fas fa-monument"></i>{" "}
            </span>
            <h4>Solar Streetlights and Boreholes Installation</h4>
            <p>
              We install wide range of solar energy which can help to Powered
              Boreholes and Solar Streetlights, all type of load and its highly
              efficient.
            </p>
          </div>
          <div>
            <span style={{ fontSize: "3em", color: "#003300" }}>
              <i class="fas fa-shopping-cart"></i>
            </span>
            <h4>Sales And Repair</h4>
            <p>
              We are dealer and supplier of solar panels, power inverter, modern
              house wiring, CCTV, fire alarm, security gadget installations, and
              various kinds of electrical material. ..
            </p>
          </div>
          <div>
            <span style={{ fontSize: "3em", color: "#003300" }}>
              <i class="fas fa-comments"></i>
            </span>
            <h4>Expert Advisers</h4>
            <p>
              We render expert advises on technical issues and solution to
              implement projects within the stipulated time, budget and approved
              standards for your entire technical problem…
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default home;
