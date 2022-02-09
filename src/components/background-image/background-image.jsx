import React from "react";
import PropTypes from "prop-types";

import { CDN_URL } from "../../config";
import Image from "../../atoms/image";

import styles from "./background-image.module.scss";

const BackgroundImage = ({ altText, isBlurred, srcPath }) => (
  <div className={styles.backgroundImage}>
    <Image
      className={isBlurred && styles.backgroundImage__image}
      src={`${CDN_URL}/${srcPath}`}
      alt={altText}
      layout="fill"
      priority={true}
    />
  </div>
);

BackgroundImage.propTypes = {
  altText: PropTypes.string.isRequired,
  srcPath: PropTypes.string.isRequired,
};

export default BackgroundImage;
