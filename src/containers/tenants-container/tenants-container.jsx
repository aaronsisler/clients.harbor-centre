import React from "react";

import tenants from "../../content/tenants";
import TenantCard from "../../components/tenant-card";
import LandingBackground from "../../components/landing-background";

import styles from "./tenants-container.module.scss";

const TenantsContainer = () => (
  <div className={styles.tenantsContainer}>
    <LandingBackground />
    <div className={styles.tenantsContainer__wrapper}>
      <h1 className={styles.tenantsContainer__title}>
        We&apos;d love to meet you
      </h1>
      <div className={styles.tenantsContainer__tenants}>
        {tenants.map((tenant, index) => (
          <TenantCard key={index} {...tenant} />
        ))}
      </div>
    </div>
  </div>
);

export default TenantsContainer;
