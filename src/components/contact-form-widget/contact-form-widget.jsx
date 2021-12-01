import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import ContactForm from "../../components/contact-form";

import styles from "./contact-form-widget.module.scss";

const ContactFormWidget = ({ className }) => (
  <div className={cn(styles.contactFormWidget, className)}>
    <ContactForm />
  </div>
);

ContactFormWidget.propTypes = {
  className: PropTypes.string,
};

export default ContactFormWidget;
