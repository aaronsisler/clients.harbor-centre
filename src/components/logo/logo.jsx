import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import cn from "classnames";

import { CDN_URL, LOGO_DIMENSIONS } from "../../config";

import styles from "./logo.module.scss";

const logo = {
  alt: "Harbor Centre",
  src: `${CDN_URL}/logo.png`,
};

const image = (
  <NextImage
    className={styles.logo__image}
    src={logo.src}
    alt={logo.alt}
    height={LOGO_DIMENSIONS.height}
    width={LOGO_DIMENSIONS.width}
  />
);

const Logo = ({ className }) => (
  <div className={cn(styles.logo, className)}>
    <NextLink href="/">
      <a>{image}</a>
    </NextLink>
  </div>
);

export default Logo;
