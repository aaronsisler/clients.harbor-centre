import React from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import TenantCardDesktopContent from "../tenant-card-desktop-content";

const TenantContentModal = ({ handleClose, isModalOpen, tenant }) => (
  <Modal
    open={isModalOpen}
    onClose={handleClose}
    aria-labelledby="Modal for tenant"
    aria-describedby="Information for tenant"
  >
    <Box>
      <TenantCardDesktopContent tenant={tenant} handleClose={handleClose} />
    </Box>
  </Modal>
);

TenantContentModal.propTypes = {
  tenant: PropTypes.shape({
    bio: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.shape({
      website: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
    }),
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
  }),
};

export default TenantContentModal;
