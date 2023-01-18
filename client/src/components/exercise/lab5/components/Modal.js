/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { navigate } from "@reach/router";

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

export default ModalExample;
