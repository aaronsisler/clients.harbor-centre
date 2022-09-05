import React from "react";
import { GOOGLE_MAPS__MAP_MARKER_IMAGE } from "../../config";

import styles from "./google-map-marker.module.scss";

const GoogleMapMarker = () => (
  <div className={styles.googleMapMarker}>
    <img src={GOOGLE_MAPS__MAP_MARKER_IMAGE} alt="" />
  </div>
);

export { GoogleMapMarker };
