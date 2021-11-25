import React from "react";
import AboutUs from "../../components/about-us";
import Building from "../../components/building";
import ContactFormWidget from "../../components/contact-form-widget";
import FlowBreak from "../../components/flow-break";
import Landing from "../../components/landing";
import LandingBackground from "../../components/landing-background";
import Location from "../../components/location";

import styles from "./landing-container.module.scss";

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <LandingBackground />
    <Landing />
    <FlowBreak />
    <AboutUs />
    <FlowBreak />
    <Location />
    <FlowBreak />
    <Building />
    <FlowBreak />
    <ContactFormWidget className={styles.landingContainer__contactFormWidget} />
  </div>
);

export default LandingContainer;
