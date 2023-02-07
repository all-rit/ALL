/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";

import GridApplicants from "../../components/GridApplicants";
import { useState } from "react";
import RepairService from "../../../../../services/lab6/RepairService";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import createAvatarData from "../../../../body/lab/GridImages/createAvatarData";

const FixedHiringCandidate = (props) => {
  const { actions, user} = props;
  const [selection, setSelection] = useState([]);
  const [roundOfApplicants, setRoundOfApplicants] = useState(null);
  const [userAnswers, setAnswers] = useState([]);
  const [isModalActive, setModalActive] = useState(false);

  const [candidateData, setCandidateData] = useState([])
  // const [userRepairAvailability, setUserRepairAvailability] = useState(null)
  // const [userRepairExperience, setUserRepairExperience] = useState(null)
  // const [userRepairAppearance, setUserRepairAppearance] = useState(null)
  // const [userRepairExpectedPay, setUserRepairExpectedPay] = useState(null)

  const handleYes = () => {
    let roundCount = roundOfApplicants;
    let answers = userAnswers.slice();
    answers.push(selection);
    setAnswers(answers);
    if (roundOfApplicants > 2) {
      // ExerciseService.submitHiredCanidates(answers);
      navigate("/Lab6/Exercise/ExerciseEnd");
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


  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  useEffect(() => {
    setRoundOfApplicants(null);
    RepairService.getUserRepair(user?.userid).then((data) => {
      if(data===null){
        navigate("/Lab6/Exercise/AIRepair");
      } else{
        setCandidateData(createAvatarData(50, data.appearance === 'true' ? true : false, data.yearsexperience, data.availability, data.expectedpay))
        setRoundOfApplicants(0)
        // setUserRepairAvailability(data.availability)
        // setUserRepairExperience(data.yearsexperience)
        // setUserRepairAppearance(data.appearance === 'true' ? true : false)
        // setUserRepairExpectedPay(data.expectedpay)
      }
    });
  }, [user]);

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
          // ExerciseService.submitHiredCanidates(answers);
          navigate("/Lab6/Exercise/ExerciseEnd");
        } else {
          let roundCount = roundOfApplicants;
          setRoundOfApplicants(roundCount + 1);
        }
      }
    }  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">REPAIRED: Choose A Candidate</h2>
      <h2 className="cognitive_instructions">
        Click on a candidates picture to select
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
          avatarData={candidateData}
          // appearance={userRepairAppearance}
          // experience={userRepairExperience}
          // availability={userRepairAvailability}
          // expectedpay={userRepairExpectedPay}
        />
      )}
      {roundOfApplicants === 1 && (
        <GridApplicants
          numApplicants={4}
          setSelection={setSelection}
        />
      )}
      {roundOfApplicants === 2 && (
        <GridApplicants
          numApplicants={4}
        />
      )}
      {roundOfApplicants === 3 && (
        <GridApplicants 
          numApplicants={4} 
          setSelection={setSelection}
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

export default FixedHiringCandidate;
