import React from "react";
import { CONTACT_PHONE_NUMBER } from "../../config";

import styles from "./contact-phone.module.scss";

const ContactPhone = () => (
  <div className={styles.contactPhone}>
    <h2>Give us a ring!</h2>
    <a href={`tel:${CONTACT_PHONE_NUMBER}`}>{CONTACT_PHONE_NUMBER}</a>
  </div>
);

export { ContactPhone };
