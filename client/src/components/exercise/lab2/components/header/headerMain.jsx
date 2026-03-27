/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ColorUpdate from "./buttons/colorUpdate";
import Home from "./buttons/homeReset.js";
import "../../Instructions/secondaryInstructions.css";
import LabButton from "../../../../all-components/LabButton";

/*
Component for the header of the pages. Controls the buttons and options
displayed to the users on each page of the appilcation
*/
class Header extends Component {
  render() {
    const {
      exerciseState,
      colors,
      goBackFromExercise,
      changeExerciseColors,
      aboutState,
      closeAboutPage,
      closeStatPage,
      statState,
      firstExercise,
      exercisesPlayed,
      openColorChange,
      colorChange,
      closeColorChange,
      openSecondInfoState,
      thirdInfoState,
      exerciseMode,
      endSystem,
    } = this.props;

    const backButton = () => {
      if (exercisesPlayed === 2) {
        closeColorChange();
        openSecondInfoState();
      } else {
        changeExerciseColors(colors);
        closeColorChange();
      }
    };
    if (exerciseState) {
      return (
        <div
          className="tw-rounded-t-lg tw-p-4 tw-mb-3 tw-shadow-lg"
          style={{ background: "black" }}
        >
          <div className="tw-flex tw-flex-row tw-h-full tw-align-middle tw-items-center tw-justify-between">
            <Home
              exerciseEnded={goBackFromExercise}
              colors={colors}
              changeExerciseColors={changeExerciseColors}
            />
            <p className="tw-body-text tw-font-medium tw-text-white">
              Vision Deficiency Simulation:
              <span style={{ fontWeight: "bold", marginLeft: "3px" }}>
                {exerciseMode === "Main" ? " Off" : " On"}
              </span>
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="tw-rounded-t-lg tw-items-center">
        <div className={"tw-w-full"}>
          {aboutState ? (
            <LabButton onClick={closeAboutPage} label={"Back"} />
          ) : (
            <div>
              {statState ? (
                <LabButton onClick={closeStatPage} label={"Home"} />
              ) : (
                <div>
                  {firstExercise ? null : (
                    <div className={"tw-p-6 tw-w-full"}>
                      {colorChange ? (
                        <div className="inlineForm tw-flex tw-items-center tw-justify-between tw-w-full">
                          <LabButton onClick={backButton} label={"Back"} />
                          <p className={"tw-body-text"}>
                            Adjust the colors below to be in better color
                            contrast
                          </p>
                        </div>
                      ) : (
                        <div className="oneline">
                          <div>
                            {exercisesPlayed > 1 &&
                            !thirdInfoState &&
                            !endSystem ? (
                              <ColorUpdate openColorChange={openColorChange} />
                            ) : null}
                          </div>
                          <div></div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
