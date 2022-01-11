import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./tenant-card.module.scss";

const cardProfile = {
  src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg",
  alt: "Card profile",
};

{
  /* <Image
            // className={styles.tenant__cardImage}
            src={images.cardProfile.src}
            alt={images.cardProfile.alt}
            layout="fill"
          ></Image> */
}

const TenantCard = ({ bio, images = {}, links, location, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentExpandedClass = isExpanded
    ? styles.tenantCard__contentExpanded
    : undefined;

  return (
    <div className={styles.tenantCard}>
      <div
        className={styles.tenantCard__main}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className={styles.tenantCardMain__name}>{name}</p>
      </div>
      <div className={cn(styles.tenantCard__content, contentExpandedClass)}>
        <p className={styles.tenantCardContent__bio}>{bio}</p>
      </div>
    </div>
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
