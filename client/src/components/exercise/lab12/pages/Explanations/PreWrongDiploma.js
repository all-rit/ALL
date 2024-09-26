// Pre Wrong Diploma (Page #2)

import { navigate } from "@reach/router";
import React, { useState } from "react";
import { useEffect } from "react";
import useMainStateContext from "src/reducers/MainContext";
import { ExerciseService } from "../../../../../services/lab12/ExerciseService";

const PreWrongDiploma = () => {
  const { state } = useMainStateContext();
  const user = state.main.user;

  const [isRepairComplete, setIsRepairComplete] = useState(false);
  const fetchExercise = async () => {
    try {
      const currentExercise = await ExerciseService.fetchExercise({
        userid: user.userid,
      });
      setIsRepairComplete(currentExercise.isFormRepairComplete);
    } catch (error) {
      console.error("Could not fetch exercise: ", error);
    }
  };

  useEffect(() => {
    fetchExercise();
  }, []);

  const handleContinue = () => {
    navigate(`/Lab12/Exercise/Diploma`);
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        {isRepairComplete ? (
          <p className="playthrough__sentence">
            Great job! Now that you&apos;ve updated the graduation application,
            you&apos;re excited to receive your newly minted diploma that shows
            respect for your preferred name and pronouns.
          </p>
        ) : (
          <p className="playthrough__sentence">
            Congratulations, you’ve graduated from ALL University! You attend
            graduation to walk the stage. However, without being prompted for
            your pronouns, the Dean uses your wrong pronouns at graduation!
            Since the form you filled out never prompted you for a preferred
            name or pronouns, this lack of recognition of your identity in front
            of everyone leaves you saddened and embarrassed.
          </p>
        )}
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
