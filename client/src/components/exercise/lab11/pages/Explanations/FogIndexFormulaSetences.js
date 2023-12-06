import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import {
  EXERCISE_PLAYING,
  REPAIR,
  EXERCISE_STATES,
} from "../../../../../constants/lab11";
import PropTypes from "prop-types";

const FogIndexFormulaSentences = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(
      `/Lab11/Exercise${REPAIR}/${EXERCISE_STATES.REPAIR_SENTENCE_COUNT}`
    );
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Great work, the fog index widget now displays the correct number of
          words! You may have noticed that the fog index widget indicated that
          the email had a fog index of 5171.2. This is because the word count is
          now correctly implemented. However, this fog index is still incorrect.
          Next, you will repair the “total sentences” portion of the fog index
          formula.
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

FogIndexFormulaSentences.propTypes = {
  actions: PropTypes.object,
};
export default FogIndexFormulaSentences;
