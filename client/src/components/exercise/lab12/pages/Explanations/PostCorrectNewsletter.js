// Post Correct Newsletter (Page #5)

import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const PostCorrectNewsletter = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(`/Lab12/Exercise/KeyTakeaways`);
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          This time the alumni newsletter uses your preferred name, even years
          after you graduated. This not only affirms your beliefs in who you
          are, it also makes you proud of your school and hopeful for the next
          generation of people who identify outside of their given sex and name
          at birth.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Continue&quot; button!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PostCorrectNewsletter;
