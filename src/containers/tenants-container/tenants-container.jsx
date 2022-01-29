import React, { useCallback, useEffect, useState } from "react";

import LandingBackground from "../../components/landing-background";
import TenantCardDesktop from "../../components/tenant-card-desktop";
import TenantCardMobile from "../../components/tenant-card-mobile";
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

const TenantsContainer = () => {
  const isMobile = useMediaQuery(1024);

  return (
    <div className={styles.tenantsContainer}>
      <LandingBackground />
      <h1 className={styles.tenantsContainer__title}>
        We&apos;d love to meet you!
      </h1>
      <div className={styles.tenantsContainer__wrapper}>
        <div className={styles.tenantsContainer__tenants}>
          {tenants.map((tenant, index) =>
            isMobile ? (
              <TenantCardMobile key={index} {...tenant} />
            ) : (
              <TenantCardDesktop key={index} {...tenant} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TenantsContainer;
