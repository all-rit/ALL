// Post Wrong Newsletter (Page #3)

import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const PostWrongDiploma = () => {
  const { actions } = useMainStateContext();

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
  }, []);

  const handleContinue = () => {
    navigate(
      `/Lab12/Exercise`, // LINK TO REPAIR SECTION
    );
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          As with before, the alumni newsletter used your incorrect pronouns and
          non-preferred name. Since we as a community should be as inclusive as
          possible to those around us, even if their beliefs contradict your
          own, this makes you unrecognized by your college, a place where you
          spent some much time and made so many friends.
        </p>
        <p className="playthrough__sentence">
          Think about the difference a single input box would have made in this
          scenario, the difference between being accepted and appreciated for
          who you are as a person and just being another alum.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Continue to Repair&quot; button to fix the issue in this
        code!
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

export default PostWrongDiploma;
