/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { navigate } from "@reach/router";
import { EXERCISE_PLAYING } from "../../../../../constants/lab6";

import GridApplicants from "../../components/GridApplicants";
import { useState } from "react";

const FixedHiringCandidate = (props) => {
  const { actions } = props;
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, [actions]);

  const handleContinue = () => {
    navigate("/Lab6/Exercise/ExerciseEnd");
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">REPAIRED: Choose A Candidate</h2>
      <h2 className="cognitive_instructions">
        Click on a candidates picture to select
      </h2>
      <h2 className="cognitive_instructions">
        Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”
      </h2>

      <GridApplicants numApplicants={4} setSelection={setSelection} />

      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleContinue}
        key="confirm"
      >
        Continue
      </button>
    </div>
  );
};

export default FixedHiringCandidate;
