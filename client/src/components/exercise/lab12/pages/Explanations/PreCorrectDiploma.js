// Pre Correct Diploma (Page #4)

import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const PreCorrectDiploma = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(`/Lab12/Exercise/Diploma`);
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Congratulations, you’ve graduated from ALL University! You attend
          graduation to walk the stage. This time, after being prompted for your
          preferred name and pronouns, and the database being updated to reflect
          these changes, the Dean uses your correct pronouns AND preferred name
          at graduation! Since the form you filled out prompted you for a
          preferred name and pronouns, this recognition from your school and
          from your dean in front of the entire audience fills you with self
          pride and joy.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Next&quot; button!
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

export default PreCorrectDiploma;
