/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const InfoModal = (props) => {
  const {
    buttonLabel,
    labName,
    redirect,
    className,
    fullDescription,
    learningObjectives,
    authors,
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  switch (buttonLabel) {
    case "More Info":
    case "More Information":
      return (
        <ul className={"tw-mt-0"}>
          <button
            className="tw-bg-darkGray poppins tw-text-white tw-font-medium tw-border-0 tw-px-3 tw-m-0 sm:tw-text-xl xs:tw-text-xs"
            onClick={toggle}
          >
            {buttonLabel}
          </button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <div className="modal-content__header tw-bg-primary-blue tw-text-white">
              <h1 className={"tw-title tw-py-5"}>{labName}</h1>
            </div>
            <ModalBody>
              <ul className="module__more_info">
                <li className="tw-body-text tw-py-5">{fullDescription}</li>
                <li className="tw-body-text">
                  Participants will take part in an exercise that will bring the
                  user through simulated problematic scenarios, then ask the
                  user to make changes.
                </li>
                <li className="tw-body-text tw-py-5">
                  Upon completion of the lab, participants will have achieved
                  the following learning objectives:
                </li>
                <ul>
                  {learningObjectives.map((learningObjective) => (
                    <li
                      key={learningObjective}
                      className="ml-8 tw-body-text list-style-disc"
                    >
                      {learningObjective}
                    </li>
                  ))}
                </ul>
                <li className="tw-body-text tw-py-5">Authors:</li>
                <li className="tw-body-text">{authors}</li>
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button className="btn-primary" onClick={redirect}>
                Launch Lab
              </Button>{" "}
              <Button className="btn-second" onClick={toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </ul>
      );
    default:
      return (
        <ul>
          <button
            color="secondary"
            className="btn-secondary btn btn-md"
            onClick={toggle}
          >
            {buttonLabel}
          </button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{labName}</ModalHeader>
            <ModalBody>
              <ul>
                <li>
                  <h1>title</h1>
                </li>
                <li>
                  <h2>long description</h2>
                </li>
                <li>
                  <h2>learning objectives</h2>
                </li>
                <li>
                  <h3>authors</h3>
                </li>
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </ul>
      );
  }
};

export default InfoModal;
