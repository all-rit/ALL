// Key Takeaways (Page #6)

import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const KeyTakeaways = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(
      `/Lab12/Exercise/`, // LINK TO REINFORCEMENT
    );
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          You have completed the exercise for Accessibility to Expression. Some
          of your key takeaways from this lab should include:
        </p>
        <ol>
          <li>
            Gender is not a social construct, but one’s own feelings as to who
            they are as a person.
          </li>
          <li>
            Companies and workplaces should strive for inclusivity for all to
            increase collaboration, decrease stress, and promote bonding between
            coworkers.
          </li>
          <li>
            Applications and forms should ask the user for their preferred name,
            pronouns, etc. and use them in all further communications.
          </li>
        </ol>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Next&quot; button to move on the the Reinforcement
        Section!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default KeyTakeaways;
