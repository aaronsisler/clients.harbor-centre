import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";

import styles from "./tenant-card.module.scss";

const cardProfile = {
  src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg",
  alt: "Card profile",
};

const TenantCard = ({ bio, images = {}, links, location, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={styles.tenantCard}>
      <CardContent onClick={() => setIsExpanded(!isExpanded)}>
        {name}
        <CardMedia
          component="img"
          height="194"
          image={cardProfile.src}
          alt={cardProfile.alt}
        />
      </CardContent>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>{bio}</CardContent>
      </Collapse>
    </Card>
  );
};

TenantCard.propTypes = {
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

export default TenantCard;
