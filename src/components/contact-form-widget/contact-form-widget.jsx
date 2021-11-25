import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import ContactFormW from "../../components/contact-form";

import styles from "./contact-form-widget.module.scss";

const ContactFormWidget = ({ className }) => (
  <div className={cn(styles.contactFormWidget, className)}>
    <ContactFormW />
  </div>
);

ContactFormWidget.propTypes = {
  className: PropTypes.string,
};

export default ContactFormWidget;
