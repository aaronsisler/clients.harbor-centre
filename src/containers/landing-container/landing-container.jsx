import React from "react";
import AboutUs from "../../components/about-us";
import FlowBreak from "../../components/flow-break";
import Landing from "../../components/landing";
import { BackgroundImage } from "../../components/background-image";
import Location from "../../components/location";

import styles from "./landing-container.module.scss";

const landingBackgroundImage = {
  altText: "Harbor Centre front",
  srcPath: "generic/generic__building--door.jpg",
};

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
