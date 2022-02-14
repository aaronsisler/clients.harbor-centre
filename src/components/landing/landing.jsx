import React from "react";

import styles from "./landing.module.scss";

const Landing = () => (
  <div className={styles.landing}>
    <h1 className={styles.landing__title}>Experience Local</h1>
    <p className={styles.landing__secondary}>
      Harbor Centre is the home of businesses and artists with unique offerings.
      We are excited to showcase local artists throughout the building to
      celebrate downtown Elizabeth City. Come visit our Main Street location in
      downtown Elizabeth City for all of your shopping and dining needs.
    </p>
  </div>
);

export default Landing;
