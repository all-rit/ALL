import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import { EXERCISE_PLAYING } from "../../../../../constants/lab11";
import PropTypes from "prop-types";

const FogIndexFormulaConclusion = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(`/Lab11/Exercise/InformationLetterFogIndexFormula`);
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Great work, you implemented all 3 parts of the fog index formula, and
          the fog index widget now displays the correct fog index!
        </p>
        <p className="playthrough__sentence">
          The fog index of the email was 19.1583, which is the equivalent of a
          post-graduate reading level. Since this email is intended for students
          and families of students, the fog index shouldn’t be higher than 10,
          or the reading level of a high school sophomore. To repair the
          readability of the email, you will choose one of the emails on the
          following page with a fog index of 10 or less.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Continue to Exercise&quot; button.
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue to Exercise
        </button>
      </div>
    </div>
  );
};

FogIndexFormulaConclusion.propTypes = {
  actions: PropTypes.object,
};
export default FogIndexFormulaConclusion;
