import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import DevicesIcon from "@mui/icons-material/Devices";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CardMedia from "@mui/material/CardMedia";

import ExternalIconLink from "../../atoms/external-icon-link";

import styles from "./tenant-card-desktop-content.module.scss";

const TenantCardDesktopContent = ({ handleClose, tenant }) => {
  const noImageGalleryClass = tenant?.images?.gallery
    ? undefined
    : styles.noImageGallery;
  return (
    <section
      className={cn(styles.tenantCardDesktopContent, noImageGalleryClass)}
    >
      <div className={styles.tenantCardDesktopContent__header}>
        <h2 className={styles.header__title}>{tenant.name}</h2>
        <p className={styles.header__close} onClick={() => handleClose()}>
          X
        </p>
      </div>
      <div className={styles.tenantCardDesktopContent__content}>
        <div className={styles.content__body}>
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
        <aside className={cn(styles.content__images, noImageGalleryClass)}>
          {tenant?.images?.gallery?.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              className={styles.images__galleryImage}
              image={image.src}
              alt={image.alt}
            />
          ))}
        </aside>
      </div>
    </section>
  );
};

TenantCardDesktopContent.propTypes = {
  tenant: PropTypes.shape({
    bio: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.shape({
      cardProfile: PropTypes.object,
      gallery: PropTypes.arrayOf(
        PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
      ),
    }),
    links: PropTypes.shape({
      website: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
  }),
};

export default TenantCardDesktopContent;
