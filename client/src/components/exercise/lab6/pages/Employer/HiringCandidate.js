/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { navigate } from "@reach/router";
import React from "react";
import { useEffect, useState } from "react";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import GridApplicants from "../../components/GridApplicants";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import ExerciseService from "../../../../../services/lab6/ExerciseService";

const HiringCandidate = (props) => {
  const { actions } = props;

  const [roundOfApplicants, setRoundOfApplicants] = useState(0);

  const [selection, setSelection] = useState([]);

  const [userAnswers, setAnswers] = useState([]);

  //default of modal set
  const [isModalActive, setModalActive] = useState(false);

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleYes = () => {
    let roundCount = roundOfApplicants;
    let answers = userAnswers.slice();
    answers.push(selection);
    setAnswers(answers);
    if (roundOfApplicants > 2) {
      ExerciseService.submitHiredCanidates(answers);
      navigate("/Lab6/Exercise/AIReasoningQuestions");
    } else {
      setRoundOfApplicants(roundCount + 1);
      setModalActive(!isModalActive);
    }
  };

  const handleNo = () => {
    let roundCount = roundOfApplicants;
    setRoundOfApplicants(roundCount + 0);
    setModalActive(!isModalActive);
  };

  const handleContinue = () => {
    if (selection.length > 0) {
      let nonRecommendedCount = 0;
      selection.map((answer) => {
        if (answer.ai === "No") {
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
          console.log(userAnswers);
          ExerciseService.submitHiredCanidates(answers);
          navigate("/Lab6/Exercise/AIReasoningQuestions");
        } else {
          let roundCount = roundOfApplicants;
          setRoundOfApplicants(roundCount + 1);
        }
      }
    }
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Choose your first Candidate!</h2>
      <h2 className="cognitive_instructions">
        Click on their picture to select
      </h2>
      <h2 className="cognitive_instructions">
        Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”
      </h2>
      <Modal
        isOpen={isModalActive}
        backdrop="static"
        toggle={() => {
          setModalActive(!isModalActive);
        }}
      >
        <ModalBody>
          <div className="tw-p-5 tw-text-center">
            <h3>
              Are you sure you wish to select this avatar? The AI advises
              against it.
            </h3>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-primary" onClick={handleYes}>
            Yes - Submit Selection
          </Button>{" "}
          <Button className="btn-second" onClick={handleNo}>
            No - Back to Selection
          </Button>
        </ModalFooter>
      </Modal>

      {roundOfApplicants === 0 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
          appearance
        />
      )}
      {roundOfApplicants === 1 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
          appearance
        />
      )}
      {roundOfApplicants === 2 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
          appearance
        />
      )}
      {roundOfApplicants === 3 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
          appearance
        />
      )}

      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContinue}
        key="confirm"
      >
        {" "}
        Continue
      </button>
    </div>
  );
};

export default HiringCandidate;
