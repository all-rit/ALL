import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "../../../../constants/lab11";
import PropTypes from "prop-types";

const LiteracyExerciseStart = (props) => {
  const { actions } = props;

  useEffect(() => {
    actions.updateState(EXERCISE_IDLE);
  }, []);

  const handleStart = () => {
    actions.updateState(EXERCISE_PLAYING);
    navigate("/Lab11/Exercise/InformationLetterIntroduction");
  };

  return (
    <div className="center-div">
      <h2 className="playthrough__title">Information Letter</h2>
      <div className="playthrough__sentence">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros
        tellus, hendrerit quis iaculis non, blandit eget turpis. Sed at
        tristique ex. Nam feugiat sodales nulla, ac lobortis diam porttitor vel.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed iaculis lectus orci, eget imperdiet lectus venenatis
        non. Pellentesque tincidunt arcu a nisi luctus, non vulputate elit
        placerat. Sed eu eleifend nunc, at porttitor massa. Vestibulum eleifend
        turpis vitae pulvinar consequat. Nulla non dui magna. Curabitur vitae
        lacinia ante, non convallis turpis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Cras ut dolor velit. Mauris posuere, enim
        vitae feugiat fringilla, eros quam iaculis est, in facilisis massa odio
        vel eros. Sed ut erat convallis, posuere lorem sit amet, auctor augue.
        Sed in neque sed magna aliquam semper. Donec tincidunt risus at nibh
        dictum consectetur. Morbi porta fringilla mauris a cursus. Sed
        condimentum porttitor mauris, eget egestas libero eleifend et. Donec
        laoreet congue tellus id condimentum. Sed accumsan non nisl non
        tincidunt. Suspendisse potenti. In gravida interdum lacinia.
      </div>
      <div className="playthrough__sentence">
        Click the “Start” button to begin this exercise!
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleStart}
        key="start"
      >
        Start
      </button>
    </div>
  );
};

LiteracyExerciseStart.propTypes = {
  actions: PropTypes.object,
};
export default LiteracyExerciseStart;
