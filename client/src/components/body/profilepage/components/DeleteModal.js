import React, { useState } from "react";
import GroupService from "../../../../services/GroupService";

import PropTypes from "prop-types";
import BrandedALLModal from "../../../all-components/BrandedALLModal";
import ALLButton from "../../../all-components/ALLButton";
import {
  DELETE_GROUP_SUCCESS,
  SUCCESS,
} from "../../../../constants/notifications";
import useMainStateContext from "../../../../reducers/MainContext";

const DeleteModal = (props) => {
  const { mainToggle, groupID, setInstrGroupsUpdated } = props;
  const { actions } = useMainStateContext();

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const deleteGroup = async () => {
    const deletionCompleted = await GroupService.deleteGroup(groupID);
    if (deletionCompleted) {
      setInstrGroupsUpdated(true);
      actions.showSnackbar(DELETE_GROUP_SUCCESS, SUCCESS);
    }
    toggle();
    mainToggle();
  };

  return (
    <div>
      <a
        className="tw-text-4xl tw-cursor-pointer tw-font-poppins
                       tw-text-darkGray tw-rounded-4xl tw-border-0 tw-bg-clear"
        onClick={toggle}
        aria-label="Exit Modal"
      >
        {" "}
        &times;{" "}
      </a>
      <BrandedALLModal
        isOpen={modal}
        toggle={toggle}
        className="add_instr_grp_modal"
        direction={"column"}
      >
        <div
          className={
            "tw-w-full tw-h-[100%] tw-flex tw-flex-row tw-justify-center"
          }
        >
          <div className={"tw-flex tw-flex-col tw-w-3/4 tw-h-full"}>
            <div className={"tw-my-6"}>
              <p
                className={
                  "tw-font-poppins tw-font-bold xs:tw-text-lg md:tw-text-3xl"
                }
              >
                {" "}
                Delete an Instructing Group
              </p>
            </div>
            <div
              className={
                "tw-flex xs:tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-w-full"
              }
            >
              <p className={"tw-font-medium"}>
                Are you sure you would like to delete your group?
              </p>
              <ALLButton
                label={"Delete Group"}
                onClick={deleteGroup}
                type="submit"
              />
            </div>
          </div>
        </div>
      </BrandedALLModal>
    </div>
  );
};

DeleteModal.propTypes = {
  mainToggle: PropTypes.func,
  groupID: PropTypes.number,
  setInstrGroupsUpdated: PropTypes.func,
};

export default DeleteModal;
