import React, { useState } from "react";

import { BackgroundImage } from "../../components/background-image";
import TenantCardDesktop from "../../components/tenant-card-desktop";
import TenantCardMobile from "../../components/tenant-card-mobile";
import TenantContentModal from "../../components/tenant-content-modal";
import { tenantsBackgroundImage } from "../../content/background-images";
import tenants from "../../content/tenants";
import { useMediaQuery } from "../../utils";

import styles from "./tenants-container.module.scss";

const TenantsContainer = () => {
  const isMobile = useMediaQuery(1024);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tenant, setTenant] = useState(undefined);
  const handleOpen = (tenantId) => {
    setTenant(tenants.find((tenant) => tenant.tenantId === tenantId));
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.tenantsContainer}>
      <BackgroundImage {...tenantsBackgroundImage} />
      <h1 className={styles.tenantsContainer__title}>
        We&apos;d love to meet you!
      </h1>
      <div className={styles.tenantsContainer__wrapper}>
        <div className={styles.tenantsContainer__tenants}>
          {tenants.map((tenant, index) =>
            isMobile ? (
              <TenantCardMobile key={index} {...tenant} />
            ) : (
              <TenantCardDesktop
                key={index}
                handleOpen={handleOpen}
                {...tenant}
              />
            )
          )}
        </div>
      </div>
      {!isMobile && (
        <TenantContentModal
          isModalOpen={isModalOpen}
          handleClose={handleClose}
          tenant={tenant}
        />
      )}
    </div>
  );
};

export default TenantsContainer;
