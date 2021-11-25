import React from "react";

import styles from "./location.module.scss";

const Location = () => (
  <div className={styles.location}>
    <h2 className={styles.location__title}>Location</h2>
    <p className={styles.location__text}>Location Chatter</p>
  </div>
);

export default Location;
