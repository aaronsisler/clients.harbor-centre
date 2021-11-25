import React from "react";
import NextImage from "next/image";

import { CDN_URL } from "../../config";

import styles from "./landing-background.module.scss";

const background = {
  alt: "Harbor Centre front",
  src: `${CDN_URL}/landing__front.jpg`,
};

const LandingBackground = () => (
  <div className={styles.landingBackground}>
    <NextImage
      className={styles.landingBackground__image}
      src={background.src}
      alt={background.alt}
      layout="fill"
    />
  </div>
);

export default LandingBackground;
