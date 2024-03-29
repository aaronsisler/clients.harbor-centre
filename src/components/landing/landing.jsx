import React from "react";
import { VideoPlayer } from "../video-player";
import { YOUTUBE_VIDEO__GRAND_OPENING } from ".././../config";

import styles from "./landing.module.scss";

const Landing = () => (
  <section className={styles.landing}>
    <h1 className={styles.landing__title}>Experience Local</h1>
    <p className={styles.landing__content}>
      Harbor Centre is the home of businesses and artists with unique offerings.
      We are excited to showcase local artists throughout the building to
      celebrate downtown Elizabeth City. Come visit our Main Street location in
      downtown Elizabeth City for all of your shopping and dining needs.
    </p>
    <br />
    <div className={styles.landing__video}>
      <VideoPlayer url={YOUTUBE_VIDEO__GRAND_OPENING} />
    </div>
  </section>
);

export default Landing;
