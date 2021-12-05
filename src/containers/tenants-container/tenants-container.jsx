import React from "react";

import tenants from "../../content/tenants";
import Tenant from "../../components/tenant";

import styles from "./tenants-container.module.scss";

const TenantsContainer = () => (
  <div className={styles.tenantsContainer}>
    <h1 className={styles.tenantsContainer__title}>
      We&apos;d love to meet you
    </h1>
    <div className={styles.tenantsContainer__tenants}>
      {tenants.map((tenant, index) => (
        <Tenant key={index} {...tenant} />
      ))}
    </div>
  </div>
);

export default TenantsContainer;
