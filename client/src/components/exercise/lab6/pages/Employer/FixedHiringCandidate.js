/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";
import Applicant from "../../components/Applicant";
import { Form } from "reactstrap";
import GridApplicants from "../../components/GridApplicants";

const FixedHiringCandidate = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/ExerciseEnd");
  };

  return (
    <Form>
      <div className="center-div">
        <h2 className="playthrough__title">REPAIRED: Choose A Candidate</h2>
        <h2 className="cognitive_instructions">
          Click on a candidates picture to select
        </h2>
        <h2 className="cognitive_instructions">
          Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”
        </h2>

        <GridApplicants numApplicants={4} />

        {/* <div className="candidate__row">
                <Applicant type={"key"} gender={"Gender:"} age={"Age:"} years={"Years of Experience:"} availability={"Availability:"} pay={"Expected Pay:"} ai={"AI Recommendation:"} />
                <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"} />
                <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"} />
                <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"} />
                <Applicant type={"applicant"} gender={"gender"} age={"age"} years={"years of experience"} availability={"availability"} pay={"expected pay"} ai={"AI Recommendation"} />
            </div> */}

        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="confirm"
        >
          Continue
        </button>
      </div>
    </Form>
  );
};

export default FixedHiringCandidate;
