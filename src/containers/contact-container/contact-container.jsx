import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BackgroundShape } from "../../components/background-shape";
import { ContactForm } from "../../components/contact-form";
import { ContactMethodModalContentWrapper } from "../../components/contact-method-modal-content-wrapper";
import { ContactPhone } from "../../components/contact-phone";

import styles from "./contact-container.module.scss";

const ContactContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(undefined);

  const determineModalContent = () => {
    switch (modalContent) {
      case "Visit Us":
        return <div>Vist Us</div>;
      case "Call Us":
        return <ContactPhone />;
      case "Write Us":
        return <ContactForm />;
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
        <Modal
          open={isModalOpen}
          onClose={handleClose}
          aria-labelledby="Modal for selected contact method"
          aria-describedby="Information for slected contact method"
        >
          <Box>
            <ContactMethodModalContentWrapper text={modalContent} />
          </Box>
        </Modal>
      </section>
    </div>
  );
};

export { ContactContainer };
