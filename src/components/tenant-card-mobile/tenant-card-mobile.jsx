import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";

import styles from "./tenant-card-mobile.module.scss";

const TenantCardMobile = ({ bio, images = {}, links, location, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={styles.tenantCardMobile}>
      <CardContent
        className={styles.tenantCardMobile__cardMain}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardMedia
          component="img"
          className={styles.cardMain__cardProfileImage}
          image={images.cardProfile.src}
          alt={images.cardProfile.alt}
        />
        <div className={styles.cardMain__title}>{name}</div>
      </CardContent>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>{bio}</CardContent>
      </Collapse>
    </Card>
  );
};

TenantCardMobile.propTypes = {
  bio: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.shape({
    website: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
  }),
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
};

export default TenantCardMobile;
