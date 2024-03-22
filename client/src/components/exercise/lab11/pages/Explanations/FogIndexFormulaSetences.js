import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import { REPAIR, EXERCISE_STATES } from "../../../../../constants/lab11";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const FogIndexFormulaSentences = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(
      `/Lab11/Exercise${REPAIR}/${EXERCISE_STATES.REPAIR_SENTENCE_COUNT}`,
    );
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Great work, the Fog Index widget now displays the correct number of
          words! You may have noticed that the Fog Index widget indicated that
          the email had a Fog Index of 57.88. This is because the word count is
          now correctly implemented. However, this Fog Index is still incorrect.
          Next, you will repair the “total sentences” portion of the Fog Index
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

export default FogIndexFormulaSentences;
