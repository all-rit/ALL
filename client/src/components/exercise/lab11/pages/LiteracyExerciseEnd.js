import { navigate } from "@reach/router";
import React from "react";
import PropTypes from "prop-types";

const LiteracyExerciseEnd = (props) => {
  const { actions } = props;

  const handleFinish = () => {
    actions.updateState("EXERCISE_IDLE");
    navigate("/Lab11/Reinforcement");
  };

  return (
    <div className="center-div">
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
        Click the &quot;Update Repair&quot; button.
      </div>
      <div className="playthrough__sentence">
        Otherwise click the &quot;Finish Exercise&quot; button to complete this
        exercise!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onClick={() => {}}
          key="repair"
        >
          Update Repair
        </button>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleFinish}
          key="start"
        >
          Finish Exercise
        </button>
      </div>
    </div>
  );
};

LiteracyExerciseEnd.propTypes = {
  actions: PropTypes.object,
};

export default LiteracyExerciseEnd;
