import React from "react";

import { CDN_URL } from "../../config";
import Image from "../../atoms/image";

import styles from "./landing-background.module.scss";

const background = {
  altText: "Harbor Centre front",
  src: `${CDN_URL}/landing__front.jpg`,
};

const LandingBackground = () => (
  <div className={styles.landingBackground}>
    <Image
      className={styles.landingBackground__image}
      src={background.src}
      alt={background.altText}
      layout="fill"
    />
  </div>
);

export default LandingBackground;
