import React, { useState } from "react";
import GroupService from "../../../../services/GroupService";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

const DeleteModal = (props) => {
  const { mainToggle, groupID, setInstrGroupsUpdated } = props;

  const [modal, setModal] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModal(!modal);
  };

  const deleteGroup = async () => {
    const deletionCompleted = await GroupService.deleteGroup(groupID);
    if (deletionCompleted) {
      setInstrGroupsUpdated(true);
    }
    toggle();
    mainToggle();
  };

  return (
    <>
      <button
        className="tw-absolute tw-text-5xl
                       tw-top-5 tw-right-0 tw-font-poppins
                       tw-text-brightRed tw-rounded-4xl tw-border-0 line-height-0"
        onClick={(e) => {
          toggle(e);
        }}
        aria-hidden="true"
      >
        {" "}
        &times;{" "}
      </button>
      <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
        <ModalHeader>Delete an instructing group</ModalHeader>
        <ModalBody>
          <ul>
            <li>Are you sure you would like to delete your group?</li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deleteGroup} type="submit">
            Delete Group
          </Button>
          <Button color="secondary" type="submit" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

DeleteModal.propTypes = {
  mainToggle: PropTypes.func,
  groupID: PropTypes.number,
  setInstrGroupsUpdated: PropTypes.func,
};

export default DeleteModal;
