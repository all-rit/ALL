import { navigate } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import GridApplicants from '../../components/GridApplicants';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import ExerciseService from '../../../../../services/lab6/ExerciseService';
import useMainStateContext from '@/reducers/MainContext';
import { EXERCISE_PLAYING } from '@/constants/index';
import LabButton from '../../../../all-components/LabButton';

const HiringCandidate = () => {
  const { actions } = useMainStateContext();

  const [roundOfApplicants, setRoundOfApplicants] = useState(0);

  const [selection, setSelection] = useState([]);

  const [userAnswers, setAnswers] = useState([]);

  //default of modal set
  const [isModalActive, setModalActive] = useState(false);

  const [numInput, setNumInput] = useState(0);

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleYes = () => {
    let roundCount = roundOfApplicants;
    let answers = userAnswers.slice();
    answers.push(selection);
    setAnswers(answers);
    if (roundOfApplicants > 2) {
      ExerciseService.submitHiredCanidates(answers);
      navigate('/Lab6/Exercise/AIReasoningQuestions');
    } else {
      setRoundOfApplicants(roundCount + 1);
      setModalActive(!isModalActive);
      setNumInput(0);
    }
  };

  const handleNo = () => {
    let roundCount = roundOfApplicants;
    setRoundOfApplicants(roundCount + 0);
    setModalActive(!isModalActive);
  };

  const handleContinue = () => {
    if (numInput === 4) {
      let nonRecommendedCount = 0;
      selection.map((answer) => {
        if (answer.ai === 'No') {
          nonRecommendedCount++;
        }
      });
      if (nonRecommendedCount > 0) {
        setModalActive(true);
      } else {
        let answers = userAnswers.slice();
        answers.push(selection);
        setAnswers(answers);
        if (roundOfApplicants > 2) {
          ExerciseService.submitHiredCanidates(answers);
          navigate('/Lab6/Exercise/AIReasoningQuestions');
        } else {
          let roundCount = roundOfApplicants;
          setRoundOfApplicants(roundCount + 1);
          setNumInput(0);
        }
      }
    }
  };

  return (
    <div className="center-div">
      <h2 className="tw-title tw-text-left tw-my-6">Choose Your Candidates</h2>
      <h2 className="tw-body-text tw-text-left tw-my-6">
        Select the <b>HIRE</b> or <b>REJECT</b> toggle to make a decision for
        each candidate and &quot;Continue&quot; the process.
      </h2>
      <h2 className="tw-body-text tw-text-left tw-my-6">
        Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”
      </h2>
      <Modal
        isOpen={isModalActive}
        backdrop="static"
        centered
        toggle={() => {
          setModalActive(!isModalActive);
        }}
      >
        <ModalBody>
          <p className="tw-w-full tw-body-text tw-text-center">
            Are you sure you wish to select these candidates? The AI advises
            against one or more of them.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-primary" onClick={handleYes}>
            Yes - Submit Selection
          </Button>{' '}
          <Button className="btn-second" onClick={handleNo}>
            No - Back to Selection
          </Button>
        </ModalFooter>
      </Modal>
      <div>
        <h4 className="tw-font-bold">
          Round {roundOfApplicants + 1} of {4}
        </h4>
      </div>
      {roundOfApplicants === 0 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
          favorable
          numInput={numInput}
          setNumInput={setNumInput}
        />
      )}
      {roundOfApplicants === 1 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
          favorable
          numInput={numInput}
          setNumInput={setNumInput}
        />
      )}
      {roundOfApplicants === 2 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
          favorable
          numInput={numInput}
          setNumInput={setNumInput}
        />
      )}
      {roundOfApplicants === 3 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
          favorable
          numInput={numInput}
          setNumInput={setNumInput}
        />
      )}
      {numInput === 4 && (
        <LabButton
          onClick={handleContinue}
          label={roundOfApplicants < 3 ? 'Confirm' : 'Confirm Selections'}
        />
      )}
    </div>
  );
};

export default HiringCandidate;
