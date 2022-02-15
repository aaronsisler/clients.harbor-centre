import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import DevicesIcon from "@mui/icons-material/Devices";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import ExternalIconLink from "../../atoms/external-icon-link";

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
        <div className={styles.cardMain__titleBlock}>
          <div className={styles.titleBlock__title}>{name}</div>
          <div className={styles.titleBlock__expand}>
            <ExpandMoreIcon fontSize="inherit" />
          </div>
        </div>
      </CardContent>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent className={styles.tenantCardMobile__cardContent}>
          <div className={styles.cardContent__links}>
            {links?.website && (
              <ExternalIconLink
                className={styles.links__link}
                href={links.website}
              >
                <DevicesIcon
                  style={{ fill: "rgb(54 18 104)" }}
                  className={styles.link__icon}
                />
              </ExternalIconLink>
            )}
            {links?.facebook && (
              <ExternalIconLink
                className={styles.links__link}
                href={links.facebook}
              >
                <FacebookIcon
                  style={{ fill: "rgb(12,146,243)" }}
                  className={styles.link__icon}
                />
              </ExternalIconLink>
            )}
            {links?.instagram && (
              <ExternalIconLink
                className={styles.links__link}
                href={links.instagram}
              >
                <InstagramIcon
                  style={{ fill: "#bc1888" }}
                  className={styles.link__icon}
                />
              </ExternalIconLink>
            )}
          </div>
          <div className={styles.cardContent__bio}>
            {bio.map((bioLineItem, index) => (
              <p key={index} className={styles.bio__lineItem}>
                {bioLineItem}
              </p>
            ))}
          </div>
        </CardContent>
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
