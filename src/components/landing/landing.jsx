import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import styles from "./landing.module.scss";

const Landing = () => (
  <div className={styles.landing}>
    <h1 className={styles.landing__title}>Landing</h1>
    <p className={styles.landing__secondary}>Experience Local</p>
    <p className={styles.landing__secondary}>
      This will be showcasing the three things like Work, Shop, Dine
    </p>
  </div>
);

export default Landing;
