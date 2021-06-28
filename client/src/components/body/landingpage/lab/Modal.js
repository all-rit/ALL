import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const InfoModal = (props) => {
  const {buttonLabel,labName,className} = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <ul>
      <button color="secondary" class="button" onClick={toggle}>{buttonLabel}</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{labName}</ModalHeader>
            <ModalBody>
                <ul>
                    <li><h1>title</h1></li>
                    <li><h2>long description</h2></li>
                    <li><h2>learning objectives</h2></li>
                    <li><h3>authors</h3></li>
                </ul>
            </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </ul>
  );
}

export default InfoModal;