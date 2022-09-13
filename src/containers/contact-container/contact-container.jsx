import React from "react";

import styles from "./contact-container.module.scss";

const ContactContainer = () => (
  <div className={styles.contactContainer}>
    <h1 className={styles.contactContainer__title}>What works best for you?</h1>
    <div className={styles.contactContainer__shape} />
    <section className={styles.contactContainer__methods}>
      <div className={styles.contactMethod}>
        <h2>Visit Us</h2>
        <div>Map</div>
      </div>
      <div className={styles.contactMethod}>
        <h2>Call Us</h2>
        <div>Call</div>
      </div>
      <div className={styles.contactMethod}>
        <h2>Write Us</h2>
        <div>Message</div>
      </div>
    </section>
  </div>
);

export { ContactContainer };
