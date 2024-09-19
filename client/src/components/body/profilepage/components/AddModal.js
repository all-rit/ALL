/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import GroupForm from "./GroupForm.js";
import GroupService from "../../../../services/GroupService";

const AddModal = (props) => {
  const {
    addMode,
    user,
    setInstrGroupsUpdated,
    groupID,
    groupName,
    assignedLabs,
    groupsUpdated,
  } = props;
  const [modal, setModal] = useState(false);
  const [inviteCode, setInviteCode] = useState("");

  const handleInviteCodeSubmit = (e) => {
    e.preventDefault();
    setInviteCode(inviteCode.trim()); // trim trailing white spaces in the invite code
    if (!inviteCode || inviteCode.indexOf(" ") >= 0) {
      // check if the code is empty or has white space in between
      alert("Invite code cannot be empty or have spaces.");
    } else {
      GroupService.enrollUser(user.userid, inviteCode.toUpperCase()).then(
        (response) => {
          if (response.status === 200) {
            alert("Successfully enrolled in group!");
            groupsUpdated(true);
            toggleModal();
          } else {
            alert(response.error);
          }
        },
      );
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  switch (addMode) {
    case "add_instr_grp":
      return (
        <>
          <button
            className="btn btn-second groups__create_btn"
            aria-label="add"
            onClick={toggleModal}
          >
            Create Group
          </button>
          <Modal
            isOpen={modal}
            toggle={toggleModal}
            className="add_instr_grp_modal"
          >
            <ModalHeader>Create an Instructing Group</ModalHeader>
            <GroupForm
              toggle={toggleModal}
              setInstrGroupsUpdated={setInstrGroupsUpdated}
              user={user}
              groupID={groupID}
              addMode={addMode}
            />
          </Modal>
        </>
      );
    case "update_grp_lab":
      return (
        <>
          <Button
            color="secondary"
            className="m-3"
            aria-label="add"
            onClick={toggleModal}
          >
            Update Group
          </Button>
          <Modal
            isOpen={modal}
            toggle={toggleModal}
            className="add_instr_grp_modal"
          >
            <ModalHeader>Update an Instructing Group</ModalHeader>
            <GroupForm
              toggle={toggleModal}
              setInstrGroupsUpdated={setInstrGroupsUpdated}
              user={user}
              groupID={groupID}
              groupName={groupName}
              addMode={addMode}
              assignedLabs={assignedLabs}
            />
          </Modal>
        </>
      );
    default: // this is the case for enrolling in a group
      return (
        <>
          <button
            className="btn btn-second groups__create_btn"
            aria-label="add"
            onClick={toggleModal}
          >
            Enroll in Group
          </button>
          <Modal
            isOpen={modal}
            toggle={toggleModal}
            className="add_instr_grp_modal"
          >
            <ModalHeader>Enroll in an Existing Group</ModalHeader>

            <Form onSubmit={handleInviteCodeSubmit}>
              <ModalBody>
                <Label for="groupInviteCode">Group invite code</Label>
                <Input
                  type="text"
                  name="inviteCode"
                  id="inviteCode"
                  onChange={(e) => {
                    setInviteCode(e.target.value);
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleInviteCodeSubmit}>
                  Enroll in Group
                </Button>
                <Button color="secondary" onClick={toggleModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
        </>
      );
  }
};

export default AddModal;
