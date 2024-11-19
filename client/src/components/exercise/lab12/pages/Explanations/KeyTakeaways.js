// Key Takeaways (Page #6)

import React from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_IDLE } from "src/constants/index";
import UserLabService from "../../../../../services/UserLabService";
import { LAB_ID } from "../../../../../constants/lab12";
import { navigate } from "@reach/router";

const KeyTakeaways = () => {
  const { actions, state } = useMainStateContext();

  const handleFinish = async () => {
    actions.updateUserState(EXERCISE_IDLE);
    await navigate("/Lab12/Reinforcement");
    await UserLabService.complete_exercise(LAB_ID);
    if (state.main.user?.firstname !== null && state.main.user !== null) {
      await UserLabService.user_complete_exercise(
        state.main.user.userid,
        LAB_ID,
      );
    }
  };

  return (
    <div className="center-div">
      <h1 className={"tw-title-styling-name tw-text-left"}>
        {" "}
        Exercise Complete{" "}
      </h1>
      <div className="guidance margin-bottom-2">
        <p className="tw-body-styling-name tw-text-left tw-py-3">
          You have completed the exercise for Accessibility to Expression. Some
          of your key takeaways from this lab should include:
        </p>
        <ul>
          <li className={"tw-body-styling-name"}>
            Gender is not a social construct, but one’s own feelings as to who
            they are as a person.
          </li>
          <li className={"tw-body-styling-name"}>
            Companies and workplaces should strive for inclusivity for all to
            increase collaboration, decrease stress, and promote bonding between
            coworkers.
          </li>
          <li className={"tw-body-styling-name"}>
            Applications and forms should ask the user for their preferred name,
            pronouns, etc. and use them in all further communications.
          </li>
        </ul>
      </div>
      <div className="tw-body-styling-name tw-text-center tw-pb-6">
        Click the <strong>Continue</strong> button to move on the the
        Reinforcement Section!
      </div>
      <button
        className="btn btn-primary text-black btn-xl text-uppercase "
        onClick={handleFinish}
        key="start"
      >
        Continue
      </button>
    </div>
  );
};

export default KeyTakeaways;
