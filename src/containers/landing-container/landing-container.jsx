import React from "react";
import AboutUs from "../../components/about-us";
import { BackgroundImage } from "../../components/background-image";
import FlowBreak from "../../components/flow-break";
import Landing from "../../components/landing";
import Location from "../../components/location";
import { landingBackgroundImage } from "../../content/background-images";

import styles from "./landing-container.module.scss";

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <BackgroundImage {...landingBackgroundImage} />
    <Landing />
    <Location />
    <FlowBreak />
    <AboutUs />
  </div>
);

export default LandingContainer;
