import React, { useState } from "react";
import PropTypes from "prop-types";

import ExternalLink from "../../atoms/external-link";
import Image from "../../atoms/image";

import styles from "./tenant.module.scss";
const cardProfile = {
  src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Neil_Armstrong.jpg",
  alt: "Card profile",
};

const Tenant = ({ bio, images = {}, links, location, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.tenant}>
      <div
        className={styles.tenant__card}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* <Image
            // className={styles.tenant__cardImage}
            src={images.cardProfile.src}
            alt={images.cardProfile.alt}
            layout="fill"
          ></Image> */}
        <p className={styles.tenant__cardName}>{name}</p>
      </div>
      {/* {isExpanded && (
        <div className={styles.tenant__expanded}>
          {links && (
            <ExternalLink
              className={styles.tenant__link}
              href={link}
              title="Link to tenant's site"
            />
          )}
          <div className={styles.tenant__bio}>
            {bio.map((bioEntry, index) => (
              <div className={styles.tenant__bioEntry} key={index}>
                {bioEntry}
              </div>
            ))}
          </div>
          <div className={styles.tenant__location}>
            Location:&nbsp;{location}
          </div>
        </div>
      )} */}
    </div>
  );
};

Tenant.propTypes = {
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

export default Tenant;
