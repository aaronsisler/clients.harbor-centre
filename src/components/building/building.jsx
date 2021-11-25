import React from "react";

import styles from "./building.module.scss";

const Building = () => (
  <div className={styles.building}>
    <h2 className={styles.building__title}>Building</h2>
    <p className={styles.building__text}>Building Chatter</p>
  </div>
);

export default Building;
