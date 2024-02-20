import React, { useEffect, useState } from "react";
import { default as Quiz } from "../../../../quiz/components/QuizHandler";
import { EXERCISE_IDLE } from "src/constants/index";
import { navigate } from "@reach/router";
import { MathComponent } from "mathjax-react";
import ExerciseService from "../../../../../services/lab7/ExerciseService";
import useMainStateContext from "src/reducers/MainContext";

/**
 * Renders the Alteration Quiz component.
 *
 * @returns {JSX.Element} The rendered Alteration Quiz component.
 */
const AlterationQuiz = () => {
  const [showContinue, setShowContinue] = useState(false);
  const { state: mainState, actions: mainActions } = useMainStateContext();

  useEffect(() => {
    if (mainState.state === EXERCISE_IDLE)
      setTimeout(() => navigate("/Lab7/Exercise/AlterationStart"));
  }, [mainState.state]);

  const handleContinue = () => {
    mainActions.updateUserState(EXERCISE_IDLE);
    navigate("/Lab7/Exercise/ExerciseEnd");
  };

  const handleSubmitData = (output, userId) => {
    ExerciseService.submitRepair(output, userId);
    setShowContinue(true);
  };

  return (
    <div className="center-div">
      <p className="playthrough__sentence">Alteration Quiz</p>
      <p className={"playthrough__sentence"}>
        How does the <b>new utility equation</b> impact the autonomous system
        compared to the <b>original utility equation</b>?
      </p>
      <div className={"tw-flex tw-flex-col playthrough__sentence"}>
        <MathComponent
          tex={String.raw`Original\;Utility\;Equation=\frac{Reward\;Value}{Cost\;Value}`}
        />
      </div>
      <Quiz
        path={`/AlterationQuiz`}
        labId={7}
        user={mainState.main.user}
        hideCertificate
        isFinalQuiz={false}
        submitData={handleSubmitData}
      />
      {showContinue && (
        <button
          className="btn btn-primary text-black btn-xl text-uppercase tw-mt-4"
          onClick={handleContinue}
          key="start"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default AlterationQuiz;
