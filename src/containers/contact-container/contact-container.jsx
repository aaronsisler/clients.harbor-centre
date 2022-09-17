import React, { useState } from "react";
import { BackgroundShape } from "../../components/background-shape";
import { ContactFormWidget } from "../../components/contact-form-widget";
import { ContactMethodModal } from "../../components/contact-method-modal";
import { ContactPhone } from "../../components/contact-phone";

import styles from "./contact-container.module.scss";

const ContactContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState("Write Us");

  const determineContactModalChild = () => {
    switch (modalContent) {
      case "Visit Us":
        return <div>Vist Us</div>;
      case "Call Us":
        return <ContactPhone />;
      case "Write Us":
        return <ContactFormWidget />;
      default:
        return <React.Fragment></React.Fragment>;
    }
  };

  const handleOpen = (method) => {
    setModalContent(method);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactContainer__title}>
        What works best for you?
      </h1>
      <BackgroundShape />
      <section className={styles.contactContainer__contactMethods}>
        <button
          className={styles.contactMethodButton}
          onClick={() => handleOpen("Visit Us")}
        >
          Visit Us
        </button>
        <button
          className={styles.contactMethodButton}
          onClick={() => handleOpen("Call Us")}
        >
          Call Us
        </button>
        <button
          className={styles.contactMethodButton}
          onClick={() => handleOpen("Write Us")}
        >
          Write Us
        </button>
        <ContactMethodModal isOpen={isModalOpen} onClose={handleClose}>
          {determineContactModalChild()}
        </ContactMethodModal>
      </section>
    </div>
  );
};

export { ContactContainer };
