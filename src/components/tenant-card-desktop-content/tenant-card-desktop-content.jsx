import React from "react";

import styles from "./tenant-card-desktop-content.module.scss";

const TenantCardDesktopContent = ({ handleClose, tenant }) => (
  <div className={styles.tenantCardDesktopContent}>
    <p>TenantCardDesktopContent</p>
    <p>{tenant.name}</p>
    <button onClick={() => handleClose()}>Close Modal</button>
  </div>
);

export default TenantCardDesktopContent;
