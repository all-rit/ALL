import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { LAB_ID } from "../../../../../constants/lab6";
import GridApplicants from "../../components/GridApplicants";
import { useState } from "react";
import RepairService from "../../../../../services/lab6/RepairService";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import ExerciseService from "../../../../../services/lab6/ExerciseService";
import UserLabService from "../../../../../services/UserLabService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const FixedHiringCandidate = () => {
  const { actions, state } = useMainStateContext();
  const [selection, setSelection] = useState([]);
  const [roundOfApplicants, setRoundOfApplicants] = useState(0);
  const [userAnswers, setAnswers] = useState([]);
  const [isModalActive, setModalActive] = useState(false);

  const [userData, setUserData] = useState(null);

  const [numInput, setNumInput] = useState(0);

  const handleYes = () => {
    let roundCount = roundOfApplicants;
    let answers = userAnswers.slice();
    answers.push(selection);
    setAnswers(answers);
    if (roundOfApplicants > 2) {
      ExerciseService.submitFixedHiredCanidates(answers);
      UserLabService.complete_exercise(LAB_ID);
      if (state.main.user?.firstname !== null && state.main.user !== null) {
        UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
      }
      navigate("/Lab6/Exercise/ExerciseEnd");
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

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  useEffect(() => {
    setRoundOfApplicants(0);
    RepairService.getUserRepair(state.main.user?.userid).then((data) => {
      if (data === null) {
        navigate("/Lab6/Exercise/AIRepair");
      } else {
        setUserData(data);
      }
    });
  }, [state.main.user]);

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
          ExerciseService.submitFixedHiredCanidates(answers);
          UserLabService.complete_exercise(LAB_ID);
          if (state.main.user?.firstname !== null && state.main.user !== null) {
            UserLabService.user_complete_exercise(state.main.user.userid, LAB_ID);
          }
          navigate("/Lab6/Exercise/ExerciseEnd");
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
      <h2 className="playthrough__title">REPAIRED: Choose A Candidate</h2>
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
        centered
        toggle={() => {
          setModalActive(!isModalActive);
        }}
      >
        <ModalBody>
          <div className="tw-p-5 tw-text-center">
            <h3>
              Are you sure you wish to select these candidates? The AI advises
              against one or more of them.
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
      {userData !== null && (
        <>
          <div>
            <h4 className="tw-font-bold">
              Round {roundOfApplicants + 1} of {4}
            </h4>
          </div>
          {roundOfApplicants === 0 && (
            <GridApplicants
              numApplicants={4}
              setSelection={setSelection}
              weightedValues={userData}
              favorable
              numInput={numInput}
              setNumInput={setNumInput}
            />
          )}
          {roundOfApplicants === 1 && (
            <GridApplicants
              numApplicants={4}
              setSelection={setSelection}
              weightedValues={userData}
              favorable
              numInput={numInput}
              setNumInput={setNumInput}
            />
          )}
          {roundOfApplicants === 2 && (
            <GridApplicants
              setSelection={setSelection}
              numApplicants={4}
              weightedValues={userData}
              favorable
              numInput={numInput}
              setNumInput={setNumInput}
            />
          )}
          {roundOfApplicants === 3 && (
            <GridApplicants
              numApplicants={4}
              setSelection={setSelection}
              weightedValues={userData}
              favorable
              numInput={numInput}
              setNumInput={setNumInput}
            />
          )}
        </>
      )}
      {numInput === 4 && (
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="confirm"
        >
          {roundOfApplicants < 3 ? "Confirm" : "Confirm - Continue"}
        </button>
      )}
    </div>
  );
};

export default FixedHiringCandidate;
