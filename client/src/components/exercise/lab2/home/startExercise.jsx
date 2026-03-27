/* eslint-disable react/prop-types */
import React from "react";
import Start from "./start";
import Dropdown from "./dropdown";
import "./homeStyle.css";

/*
Start exercise component for rendering all of the instructions for starting a exercise
*/
const StartExercise = ({
  selectOption,
  startExercise,
  exerciseOption,
  onChangeExerciseColors,
  colors,
  exercisesPlayed,
}) => {
  // Handles a exercise option changing in the dropdown
  const changeOption = (event) => {
    selectOption(event.target.value);
  };

  return (
    <div>
      <div className="center fourthTitle">
        {exercisesPlayed === 0 ? (
          <p className={"tw-p-5 tw-mt-3 tw-text-2xl"}>
            Click the button to start the exercise!
          </p>
        ) : (
          <div>
            {exercisesPlayed === 1 ? (
              <div className={"tw-flex tw-flex-col tw-items-center"}>
                <p
                  className={
                    "tw-body-text tw-p-5 tw-m-3 tw-text-center tw-w-3/4"
                  }
                >
                  You will now conduct the same exercise of clicking on the
                  correct colored circle, but this time with a vision deficiency
                  emulation feature turned on. You will now experience the
                  exercise just as someone with colorblindness would.
                </p>
                <p className={"tw-sub-title"}>
                  Click the <strong>Start</strong> button to begin the exercise.
                </p>
              </div>
            ) : (
              <div>
                {exercisesPlayed === 2 ? (
                  <div className={"tw-flex tw-flex-col tw-items-center"}>
                    <p className={"tw-p-5 tw-body-text tw-text-center"}>
                      Click the button to restart the exercise with the same
                      color vision deficiency!
                    </p>
                    <p className={"tw-p-5 tw-body-text tw-text-center"}>
                      The Colorblindness emulation feature will now be made
                      active. You will experience the exercise as someone with
                      colorblindness would.
                    </p>
                  </div>
                ) : (
                  <p className={"tw-py-6"}>
                    Choose a color vision deficiency and click the button to
                    start the exercise!
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="center">
        {exercisesPlayed === 0 ? (
          <div className="center">
            <Start
              startExercise={startExercise}
              exerciseOption={exerciseOption}
              onChangeExerciseColors={onChangeExerciseColors}
              colors={colors}
            />
          </div>
        ) : (
          <div>
            {exercisesPlayed < 3 ? (
              <div className="center">
                <Start
                  startExercise={startExercise}
                  exerciseOption={exerciseOption}
                  onChangeExerciseColors={onChangeExerciseColors}
                  colors={colors}
                />
              </div>
            ) : (
              <div className="center">
                <Dropdown selectOption={changeOption} />
                <Start
                  startExercise={startExercise}
                  exerciseOption={exerciseOption}
                  onChangeExerciseColors={onChangeExerciseColors}
                  colors={colors}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StartExercise;
