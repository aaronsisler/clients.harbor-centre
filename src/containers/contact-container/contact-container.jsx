import React from "react";
import { BackgroundShape } from "../../components/background-shape";

import styles from "./contact-container.module.scss";

const ContactContainer = () => (
  <div className={styles.contactContainer}>
    <h1 className={styles.contactContainer__title}>What works best for you?</h1>
    <BackgroundShape />
    <section className={styles.contactContainer__contactMethods}>
      <button className={styles.contactMethodButton}>Visit Us</button>
      <button className={styles.contactMethodButton}>Call Us</button>
      <button className={styles.contactMethodButton}>Write Us</button>
    </section>
  </div>
);

export { ContactContainer };
