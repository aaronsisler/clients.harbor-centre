import React from "react";
import PropTypes from "prop-types";

import DevicesIcon from "@mui/icons-material/Devices";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import ExternalIconLink from "../../atoms/external-icon-link";

import styles from "./tenant-card-desktop-content.module.scss";

const TenantCardDesktopContent = ({ handleClose, tenant }) => (
  <section className={styles.tenantCardDesktopContent}>
    <div className={styles.tenantCardDesktopContent__header}>
      <h2 className={styles.header__title}>{tenant.name}</h2>
      <p className={styles.header__close} onClick={() => handleClose()}>
        X
      </p>
    </div>
    <div className={styles.tenantCardDesktopContent__body}>
      <div className={styles.body__links}>
        {tenant?.links?.website && (
          <ExternalIconLink
            className={styles.links__link}
            href={tenant?.links.website}
          >
            <DevicesIcon
              style={{ fill: "rgb(54 18 104)" }}
              className={styles.link__icon}
            />
          </ExternalIconLink>
        )}
        {tenant?.links?.facebook && (
          <ExternalIconLink
            className={styles.links__link}
            href={tenant?.links.facebook}
          >
            <FacebookIcon
              style={{ fill: "rgb(12,146,243)" }}
              className={styles.link__icon}
            />
          </ExternalIconLink>
        )}
        {tenant?.links?.instagram && (
          <ExternalIconLink
            className={styles.links__link}
            href={tenant?.links.instagram}
          >
            <InstagramIcon
              style={{ fill: "#bc1888" }}
              className={styles.link__icon}
            />
          </ExternalIconLink>
        )}
      </div>
      <div className={styles.body__bio}>
        {tenant.bio.map((bioLineItem, index) => (
          <p key={index} className={styles.bio__lineItem}>
            {bioLineItem}
          </p>
        ))}
      </div>
    </div>
  </section>
);

TenantCardDesktopContent.propTypes = {
  tenant: PropTypes.shape({
    bio: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      website: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
    }),
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
  }),
};

export default TenantCardDesktopContent;
