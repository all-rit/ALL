import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { RESET } from "../../../constants/lab2/index";
import { useDispatch } from "react-redux";

const ExerciseEnd = (props) => {
  const { isExperiential } = props;
  const dispatch = useDispatch();

  const endActivity = () => {
    props.actions.setIsImagine(false);
    dispatch({ type: RESET });
    navigate("/");
  };

  return (
    <div className="container bottomSpace center-div">
      <h2 className="playthrough__title tw-font-bold tw-text-5xl">
        {isExperiential ? "Experiential" : "Expression"} Empathy Building: End
      </h2>
      <div className="playthrough__sentence__imagine tw-font-medium tw-text-4xl">
        Congratulations! You&apos;ve completed the activity!
      </div>
      <h2 className="playthrough__title tw-font-medium">
        Thanks for participating!
      </h2>
      <button
        className="btn btn-xl btn-second text-uppercase nextButton"
        onClick={endActivity}
      >
        Return Home
      </button>
    </div>
  );
};

ExerciseEnd.propTypes = {
  isExperiential: PropTypes.bool,
  actions: PropTypes.shape({
    setIsImagine: PropTypes.func,
  }),
  state: PropTypes.shape({}),
};

export default ExerciseEnd;
