import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { LAB_ID } from "../../../../constants/lab11";
import UserLabService from "../../../../services/UserLabService";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE, EXERCISE_PLAYING } from "src/constants/index";

const LiteracyExerciseEnd = (props) => {
  const { user } = props;
  const { actions } = useMainStateContext();

  const handleFinish = () => {
    actions.updateUserState(EXERCISE_IDLE);
    UserLabService.complete_exercise(LAB_ID);
    if (user?.firstname !== null && user !== null) {
      UserLabService.user_complete_exercise(user.userid, LAB_ID);
    }
    navigate("/Lab11/Reinforcement");
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleTryAgain = () => {
    navigate("/Lab11/Exercise/InformationLetterFogIndexFormula");
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
        Click the &quot;Try Again&quot; button to continue using your Fog
        Index Calulator
      </div>
      <div className="playthrough__sentence">
        Otherwise click the &quot;Finish Exercise&quot; button to complete this
        exercise!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onClick={handleTryAgain}
          key="repair"
        >
          Try Again
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
  user: PropTypes.object,
};

export default LiteracyExerciseEnd;
