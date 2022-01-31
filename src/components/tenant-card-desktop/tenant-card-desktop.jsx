import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import styles from "./tenant-card-desktop.module.scss";

const TenantCardDesktop = ({
  bio,
  handleOpen,
  images = {},
  links,
  location,
  name,
  tenantId,
}) => {
  return (
    <Card className={styles.tenantCardDesktop}>
      <CardContent
        className={styles.tenantCardDesktop__cardMain}
        onClick={() => handleOpen(tenantId)}
      >
        <CardMedia
          component="img"
          className={styles.cardMain__cardProfileImage}
          image={images.cardProfile.src}
          alt={images.cardProfile.alt}
        />
        <div className={styles.cardMain__title}>{name}</div>
      </CardContent>
    </Card>
  );
};

TenantCardDesktop.propTypes = {
  bio: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.shape({
    cardProfile: PropTypes.object,
    extra: PropTypes.array,
  }),
  links: PropTypes.shape({
    website: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
  }),
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
};

export default TenantCardDesktop;
