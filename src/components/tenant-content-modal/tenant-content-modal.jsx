import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import TenantCardDesktopContent from "../tenant-card-desktop-content";

import styles from "./tenant-content-modal.module.scss";

const TenantContentModal = ({ handleClose, isModalOpen, tenant }) => (
  <Modal
    open={isModalOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box>
      <TenantCardDesktopContent tenant={tenant} handleClose={handleClose} />
    </Box>
  </Modal>
);

export default TenantContentModal;
