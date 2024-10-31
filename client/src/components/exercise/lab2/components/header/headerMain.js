/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import ColorUpdate from "./buttons/colorUpdate";
import Home from "./buttons/homeReset.js";
import Button from "./buttons/button";
import "../../Instructions/secondaryInstructions.css";

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
            <p className="tw-body-styling-name tw-font-medium tw-text-white">
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
      <div className="headerStyle tw-rounded-t-lg tw-items-center">
        <div>
          {aboutState ? (
            <Button
              clickMethod={closeAboutPage}
              message={"Back"}
              className="backButton btn btn-second btn-xl text-uppercase "
              fontSizing={"25px"}
            />
          ) : (
            <div>
              {statState ? (
                <Button
                  clickMethod={closeStatPage}
                  message={"Home"}
                  fontSizing={"25px"}
                />
              ) : (
                <div>
                  {firstExercise ? null : (
                    <div>
                      {colorChange ? (
                        <div className="inlineForm">
                          <Button
                            clickMethod={backButton}
                            message={"Back"}
                            className="backButton btn btn-second btn-xl text-uppercase"
                            fontSizing={"25px"}
                          />
                          <p
                            className="mainColor secondTitle"
                            style={{
                              marginTop: "15px",
                              marginLeft: "25px",
                              background: "rgba(38,38,38,1)",
                            }}
                          >
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
