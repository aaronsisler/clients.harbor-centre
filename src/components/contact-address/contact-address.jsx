import React from "react";
import ExternalLink from "../../atoms/external-link";
import { CONTACT_ADDRESS, GOOGLE_MAPS__LOCATION } from "../../config";

import styles from "./contact-address.module.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const ContactAddress = () => (
  <div className={styles.contactAddress}>
    <p>{streetAddress}</p>
    <p>{cityStateZip}</p>
    <ExternalLink
      href={GOOGLE_MAPS__LOCATION}
      title="Get directions"
      className={styles.contactAddress__navLink}
    />
  </div>
);

export default ContactAddress;
