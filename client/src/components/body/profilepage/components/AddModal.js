import React, { useState } from "react";
import { ModalBody, Form, Label, Input } from "reactstrap";
import GroupForm from "./GroupForm.js";
import GroupService from "../../../../services/GroupService";
import ALLButton from "../../../all-components/ALLButton";
import BrandedALLModal from "../../../all-components/BrandedALLModal";
import PropTypes from "prop-types";

const AddModal = (props) => {
  const {
    addMode,
    user,
    setInstrGroupsUpdated,
    groupID,
    groupName,
    assignedLabs,
    groupsUpdated,
    groupColor,
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
          <ALLButton
            className="tw-bg-white tw-bordergroups__create_btn"
            aria-label="add"
            label={"Start a New Group"}
            onClick={toggleModal}
          >
            Create Group
          </ALLButton>
          <BrandedALLModal
            isOpen={modal}
            toggle={toggleModal}
            className="add_instr_grp_modal"
            direction={"column"}
          >
            <GroupForm
              toggle={toggleModal}
              setInstrGroupsUpdated={setInstrGroupsUpdated}
              user={user}
              groupID={groupID}
              addMode={addMode}
            />
          </BrandedALLModal>
        </>
      );
    case "update_grp_lab":
      return (
        <>
          <a
            className="hover:tw-shadow-lg tw-absolute tw-right-0 tw-top-[60%] tw-cursor-pointer tw-font-poppins
                        tw-bg-primary-yellow tw-p-2 tw-font-medium"
            aria-label="Update Group"
            onClick={() => {
              toggleModal();
            }}
          >
            Edit/View Group
          </a>
          <BrandedALLModal
            isOpen={modal}
            toggle={toggleModal}
            className="add_instr_grp_modal"
            direction={"column"}
          >
            <GroupForm
              toggle={toggleModal}
              setInstrGroupsUpdated={setInstrGroupsUpdated}
              user={user}
              groupColor={groupColor}
              groupID={groupID}
              groupName={groupName}
              addMode={addMode}
              assignedLabs={assignedLabs}
            />
          </BrandedALLModal>
        </>
      );
    default: // this is the case for enrolling in a group
      return (
        <>
          <ALLButton
            className="btn groups__create_btn hover:tw-shadow-lg"
            aria-label="add"
            onClick={toggleModal}
            label={"Join a New Group"}
          />
          <BrandedALLModal
            isOpen={modal}
            toggle={toggleModal}
            className="add_instr_grp_modal"
            direction={"column"}
          >
            <>
              <Form onSubmit={handleInviteCodeSubmit}>
                <ModalBody className={"tw-mt-10 tw-px-[5rem]"}>
                  <p className={"tw-font-poppins tw-font-medium tw-text-sm"}>
                    Looking to join a class?
                  </p>
                  <Label
                    className={"tw-title-styling-name tw-text-xl"}
                    for="groupInviteCode"
                  >
                    Enter your group code here:
                  </Label>
                  <div
                    className={
                      "tw-flex tw-flex-row tw-h-[3rem] tw-items-center"
                    }
                  >
                    <Input
                      className={"tw-w-3/4 tw-h-full tw-mr-3 "}
                      placeholder={"Group Code"}
                      type="text"
                      name="inviteCode"
                      id="inviteCode"
                      onChange={(e) => {
                        setInviteCode(e.target.value);
                      }}
                    />
                    <ALLButton
                      onClick={handleInviteCodeSubmit}
                      label={"Join a Group"}
                    />
                  </div>
                </ModalBody>
              </Form>
            </>
          </BrandedALLModal>
        </>
      );
  }
};

AddModal.propTypes = {
  addMode: PropTypes.bool,
  user: PropTypes.shape({
    userid: PropTypes.number,
  }),
  setInstrGroupsUpdated: PropTypes.func,
  groupID: PropTypes.number,
  groupName: PropTypes.string,
  assignedLabs: PropTypes.array,
  groupsUpdated: PropTypes.func,
  groupColor: PropTypes.string,
};

export default AddModal;
