import React from "react";
import NextLink from "next/link";
import cn from "classnames";

import { Image } from "../../atoms/image";
import { CDN_URL } from "../../config";

import styles from "./logo.module.scss";

const logo = {
  alt: "Harbor Centre",
  src: `${CDN_URL}/logo__clear.png`,
};

const image = (
  <Image className={styles.logo__image} src={logo.src} alt={logo.alt} />
);

const Logo = ({ className }) => (
  <div className={cn(styles.logo, className)}>
    <NextLink href="/">
      <img className={styles.logo__image} src={logo.src} alt={logo.alt} />
    </NextLink>
  </div>
);

export default Logo;
