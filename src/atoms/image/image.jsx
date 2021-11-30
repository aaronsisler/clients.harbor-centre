import React from "react";
import NextImage from "next/image";
import cn from "classnames";

import PropTypes from "prop-types";

import styles from "./image.module.scss";

const ImageAtom = ({ alt, className, height, layout, src, width }) => (
  <NextImage
    className={cn(className, styles.image)}
    src={src}
    alt={alt}
    layout={layout}
    unoptimized={true}
    height={height}
    width={width}
  />
);

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.any,
  layout: PropTypes.string,
  width: PropTypes.any,
};

export default ImageAtom;
