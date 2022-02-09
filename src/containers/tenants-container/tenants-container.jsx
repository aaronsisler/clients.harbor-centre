import React, { useCallback, useEffect, useState } from "react";

import BackgroundImage from "../../components/background-image";
import TenantCardDesktop from "../../components/tenant-card-desktop";
import TenantCardMobile from "../../components/tenant-card-mobile";
import TenantContentModal from "../../components/tenant-content-modal";
import tenants from "../../content/tenants";

import styles from "./tenants-container.module.scss";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

const tenantsBackgroundImage = {
  altText: "Harbor Centre front",
  // srcPath: "landing__front.jpg",
  srcPath: "generic__building-muted.jpg",
};

const TenantsContainer = () => {
  const isMobile = useMediaQuery(1024);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tenant, setTenant] = useState(undefined);
  const handleOpen = (tenantId) => {
    setTenant(tenants.find((tenant) => tenant.tenantId === tenantId));
    setIsModalOpen(true);
    console.log("Open sesame!");
  };

  const handleClose = () => {
    setIsModalOpen(false);
    console.log("Shut it down!");
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
