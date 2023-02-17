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

  const [numInput, setNumInput] = useState(0);

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
          ExerciseService.submitHiredCanidates(answers);
          navigate("/Lab6/Exercise/AIReasoningQuestions");
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
      <h2 className="playthrough__title">Choose your first Candidate!</h2>
      <h2 className="cognitive_instructions">
        Select the &quot;HIRE&quot; or &quot;REJECT&quot; toggle to make a
        decision for each candidate and &quot;Continue&quot; the process.
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
              Are you sure you wish to select this candidate? The AI advises
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
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="confirm"
        >
          {roundOfApplicants < 3 ? "Confirm" : "Confirm --- Continue"}
        </button>
      )}
    </div>
  );
};

export default HiringCandidate;
