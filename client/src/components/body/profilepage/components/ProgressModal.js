import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import ResultLimiter from "./ResultLimiter";

const ProgressModal = (props) => {
  const { lab, enrolledStudents, instructing } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  if (instructing) {
    return (
      <>
        <button className="btn groups__labs__btn" onClick={toggle}>
          {lab.labShortName}
        </button>
        <Modal isOpen={modal} toggle={toggle} className="add_instr_grp_modal">
          <ModalHeader>Student Progress for {lab.labShortName} Lab</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quiz Score</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <ResultLimiter
                resultType={"studentProgress"}
                data={enrolledStudents}
                lab={lab}
              />
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  } else {
    return <div className="groups__labs__bubble">{lab.labShortName}</div>;
  }
};

export default ProgressModal;
