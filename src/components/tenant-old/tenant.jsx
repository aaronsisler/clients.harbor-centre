import React from "react";
import PropTypes from "prop-types";

import ExternalLink from "../../atoms/external-link";
import styles from "./tenant.module.scss";

const Tenant = ({ bio, link, location, name }) => (
  <div className={styles.tenant}>
    <div className={styles.tenant__name}>{name}</div>
    {link && (
      <ExternalLink
        className={styles.tenant__link}
        href={link}
        title="Link to tenant's site"
      />
    )}
    <div className={styles.tenant__bio}>{bio}</div>
    <div className={styles.tenant__location}>Location:&nbsp;{location}</div>
  </div>
);

Tenant.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  link: PropTypes.string,
  bio: PropTypes.string,
};

export default Tenant;
