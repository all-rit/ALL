/* eslint-disable react/prop-types */
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const InfoModal = (props) => {
  const {
    open,
    toggleOpen,
    labName,
    fullDescription,
    learningObjectives,
    authors,
    redirect,
  } = props;

  return (
    <Modal isOpen={open} toggle={toggleOpen}>
      <div className="modal-content__header tw-bg-primary-blue tw-text-white">
        <h1 className={'tw-title tw-py-5'}>{labName}</h1>
      </div>
      <ModalBody>
        <ul className="module__more_info">
          <li className="tw-body-text tw-py-5">{fullDescription}</li>
          <li className="tw-body-text">
            Participants will take part in an exercise that will bring the user
            through simulated problematic scenarios, then ask the user to make
            changes.
          </li>
          <li className="tw-body-text tw-py-5">
            Upon completion of the lab, participants will have achieved the
            following learning objectives:
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
        </Button>{' '}
        <Button className="btn-second" onClick={toggleOpen}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default InfoModal;
