import React from "react";
import AboutUs from "../../components/about-us";
import Building from "../../components/building";
import ContactForm from "../../components/contact-form";
import FlowBreak from "../../components/flow-break";
import Landing from "../../components/landing";
import Location from "../../components/location";

import styles from "./landing-container.module.scss";

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <Landing />
    <FlowBreak />
    <AboutUs />
    <FlowBreak />
    <Location />
    <FlowBreak />
    <Building />
    <FlowBreak />
    <ContactForm />
  </div>
);

export default LandingContainer;
