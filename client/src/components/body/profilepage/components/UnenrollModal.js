/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import GroupService from "../../../../services/GroupService";
import ALLButton from "../../../all-components/ALLButton";
import useMainStateContext from "../../../../reducers/MainContext";
import {
  ERROR,
  SUCCESS,
  UNENROLL_ERROR,
  UNENROLL_SUCCESS,
} from "../../../../constants/notifications";

const UnenrollModal = (props) => {
  const { actions } = useMainStateContext();
  const { className, userid, groupid, groupsUpdated } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const unenroll = (userid, groupid, e) => {
    GroupService.unenrollUserFromGroup(userid, groupid).then((response) => {
      if (response.status === 200) {
        e.preventDefault();
        actions.showSnackbar(UNENROLL_SUCCESS, SUCCESS);
        groupsUpdated(true);
      } else {
        actions.showSnackbar(UNENROLL_ERROR, ERROR);
      }
    });
    toggle();
  };

  return (
    <ul>
      <ALLButton label={"Leave Group"} onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>Unenroll from group</ModalHeader>
        <ModalBody>
          <ul>
            <li>
              <p>Are you sure you want to unenroll?</p>
            </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn-primary"
            onClick={(e) => unenroll(userid, groupid, e)}
          >
            Unenroll
          </Button>{" "}
          <Button className="btn-second" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </ul>
  );
};

export default UnenrollModal;
