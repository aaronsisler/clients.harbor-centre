import React, { useState } from "react";
import cn from "classnames";
import Logo from "../../components/logo";
import { AccordionDesktop } from "../../atoms/accordion-desktop";
import AccordionMobile from "../../atoms/accordion-mobile";
import Hamburger from "../../atoms/hamburger";
import navigationLinks from "../../content/navigation-links";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuToggledClass = isMobileMenuOpen
    ? styles.navbar__linksOpen
    : undefined;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__toggle}>
        <Hamburger isToggled={isMobileMenuOpen} onClick={handleMenuToggle} />
      </div>
      <div className={styles.navbar__logo}>
        <Logo />
      </div>
      <div className={cn(styles.navbar__linksMobile, menuToggledClass)}>
        <div className={cn(styles.navbar__linksContent)}>
          {navigationLinks.map((navLink) => (
            <AccordionMobile
              key={navLink.key}
              onContentClick={handleMenuToggle}
              {...navLink}
            />
          ))}
        </div>
      </div>
      <div className={cn(styles.navbar__linksDesktop, menuToggledClass)}>
        {navigationLinks.map((navLink) => (
          <AccordionDesktop key={navLink.key} {...navLink} />
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
