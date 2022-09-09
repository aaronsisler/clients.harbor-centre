import React from "react";

import styles from "./about-us.module.scss";

const AboutUs = () => (
  <section className={styles.aboutUs}>
    <h2 className={styles.aboutUs__title}>About Us</h2>
    <p className={styles.aboutUs__content}>
      We are a group of local business owners, living, working, and raising
      families in Elizabeth City. As residents and local business owners, we
      want to see downtown Elizabeth City thrive and become a destination for
      friends, families, and professionals.
    </p>
  </section>
);

export default AboutUs;
