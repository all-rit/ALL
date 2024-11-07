/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import GroupService from "../../../../services/GroupService";
import ALLButton from "../../../all-components/ALLButton";
import Snackbar from "@mui/material/Snackbar";
import useMainStateContext from "../../../../reducers/MainContext";

const UnenrollModal = (props) => {
  const { state, actions } = useMainStateContext();
  const { className, userid, groupid, groupsUpdated } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const unenroll = (userid, groupid, e) => {
    GroupService.unenrollUserFromGroup(userid, groupid).then((response) => {
      if (response.status === 200) {
        e.preventDefault();
        actions.showSnackbar(
          "You have successfully unenrolled from the group!",
        );
        groupsUpdated(true);
      } else {
        alert("Failed to unenroll from group.");
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
      <Snackbar
        open={state.main?.snackbar?.open}
        autoHideDuration={5000}
        message={state.main?.snackbar?.message}
        onClose={actions.hideSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        className={"tw-font-poppins"}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#369d2a",
            color: "white",
          },
        }}
      />
    </ul>
  );
};

export default UnenrollModal;
