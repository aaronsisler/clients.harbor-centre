import React from "react";
import GoogleMapReact from "google-map-react";
import {
  GOOGLE_MAPS__API_KEY,
  GOOGLE_MAPS__LATITUDE,
  GOOGLE_MAPS__LONGITUDE,
} from "../../config";
import { GoogleMapMarker } from "../google-map-marker";

import styles from "./google-map-widget.module.scss";

const defaultProps = {
  center: {
    lat: GOOGLE_MAPS__LATITUDE,
    lng: GOOGLE_MAPS__LONGITUDE,
  },
  zoom: 18,
};

const GoogleMapWidget = () => (
  <div className={styles.googleMapWidget}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS__API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <GoogleMapMarker
        lat={defaultProps.center.lat}
        lng={defaultProps.center.lng}
      />
    </GoogleMapReact>
  </div>
);

export { GoogleMapWidget };
