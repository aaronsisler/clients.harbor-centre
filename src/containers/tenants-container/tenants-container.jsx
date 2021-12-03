import React from "react";

import tenants from "../../content/tenants";
import Tenant from "../../components/tenant";

import styles from "./tenants-container.module.scss";

const TenantsContainer = () => (
  <div className={styles.tenantsContainer}>
    {tenants.map((tenant, index) => (
      <Tenant key={index} name={tenant.name} />
    ))}
  </div>
);

export default TenantsContainer;
