import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import styles from "./landing.module.scss";

const Landing = () => (
  <div className={styles.landing}>
    <h1 className={styles.landing__title}>Landing</h1>
    <p className={styles.landing__secondary}>Landing Chatter</p>
    <Hyperlink
      href="/contact"
      title="Let's Get Started"
      className={styles.landing__cta}
    />
  </div>
);

export default Landing;
