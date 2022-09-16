import React from "react";

import styles from "./contact-method-modal-content-wrapper.module.scss";

const ContactMethodModalContentWrapper = ({ text }) => (
  <div className={styles.contactMethodModalContentWrapper}>{text}</div>
);

export { ContactMethodModalContentWrapper };
