// Pre Wrong Diploma (Page #2)

import { navigate } from "@reach/router";
import React from "react";
import { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { EXERCISE_PLAYING } from "src/constants/index";

const PreWrongDiploma = () => {
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
          graduation to walk the stage! However, without being prompted for your
          pronouns, the Dean uses your wrong pronouns at graduation! Since the
          form you filled out never prompted you for a preferred name or
          pronouns, this lack of recognition of your identity in front of
          everyone leaves you saddened and embarrassed.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Continue to Diploma&quot; button.
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Continue to Diploma
        </button>
      </div>
    </div>
  );
};

export default PreWrongDiploma;
