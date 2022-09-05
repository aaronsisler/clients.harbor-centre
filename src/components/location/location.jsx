import React from "react";
import { GoogleMapWidget } from "../../components/google-map-widget";

import styles from "./location.module.scss";

const Location = () => (
  <section className={styles.location}>
    <h2 className={styles.location__title}>Location</h2>
    <div className={styles.location__map}>
      <GoogleMapWidget />
    </div>
  </section>
);

export default Location;
