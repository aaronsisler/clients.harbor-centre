import React from "react";

import styles from "./landing.module.scss";

const Landing = () => (
  <div className={styles.landing}>
    <h1 className={styles.landing__title}>Experience Local</h1>
    <p className={styles.landing__secondary}>
      Come visit our Main Street location in downtown Elizabeth City for all of
      your shopping and dining needs.
    </p>
  </div>
);

export default Landing;
