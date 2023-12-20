import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import { REPAIR, EXERCISE_STATES } from "../../../../../constants/lab11";
import PropTypes from "prop-types";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const FogIndexFormulaComplexWords = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(
      `/Lab11/Exercise${REPAIR}/${EXERCISE_STATES.REPAIR_COMPLEX_WORDS}`
    );
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Great work, the fog index widget now displays the correct number of
          sentences! You may have noticed that the fog index widget indicated
          that the email had a fog index of 5128.5333. This is because the
          sentence count is now correctly implemented. However, this fog index
          is still incorrect. Next, you will repair the “complex words” portion
          of the fog index formula.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Continue to Repair&quot; button.
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue to Repair
        </button>
      </div>
    </div>
  );
};

FogIndexFormulaComplexWords.propTypes = {
  actions: PropTypes.object,
};
export default FogIndexFormulaComplexWords;
