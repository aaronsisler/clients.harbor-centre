import React, { useState } from "react";
import PropTypes from "prop-types";

import ExternalLink from "../../atoms/external-link";

import styles from "./tenant.module.scss";

const Tenant = ({ bio, link, location, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={styles.tenant}>
      <div
        className={styles.tenant__card}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {name}
      </div>
      {isExpanded && (
        <div className={styles.tenant__expanded}>
          {link && (
            <ExternalLink
              className={styles.tenant__link}
              href={link}
              title="Link to tenant's site"
            />
          )}
          <div className={styles.tenant__bio}>{bio}</div>
          <div className={styles.tenant__location}>
            Location:&nbsp;{location}
          </div>
        </div>
      )}
    </div>
  );
};

Tenant.propTypes = {
  bio: PropTypes.string,
  link: PropTypes.string,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Tenant;
