import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

const ModalExample = (props) => {
  const { buttonLabel, message, title, link } = props;

  const [modal] = useState(true);

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => navigate(link)}>
            {buttonLabel}
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalExample.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ModalExample;
