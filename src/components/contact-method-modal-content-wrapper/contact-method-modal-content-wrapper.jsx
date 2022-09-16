import React from "react";
import Box from "@mui/material/Box";

import styles from "./contact-method-modal-content-wrapper.module.scss";

const ContactMethodModalContentWrapper = ({ text }) => (
  <Box>
    <div className={styles.contactMethodModalContentWrapper}>{text}</div>
  </Box>
);

export { ContactMethodModalContentWrapper };
