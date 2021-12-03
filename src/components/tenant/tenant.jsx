import React from "react";
import PropTypes from "prop-types";

import styles from "./tenant.module.scss";

const Tenant = ({ name }) => <div className={styles.tenant}>{name}</div>;

Tenant.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tenant;
