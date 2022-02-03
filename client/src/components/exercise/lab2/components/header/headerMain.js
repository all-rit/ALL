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
      endSystem
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
        <div className="headerStyle" style={{ background: "black" }}>
          <div className="oneline center">
            <Home
              exerciseEnded={goBackFromExercise}
              colors={colors}
              changeExerciseColors={changeExerciseColors}
            />
            <p className="deficiencyCheck">
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
      <div className="headerStyle">
        <div>
          {aboutState ? (
            <Button
              clickMethod={closeAboutPage}
              message={"Back"}
              class="backButton btn btn-second btn-xl text-uppercase "
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
                                  background: "rgba(38,38,38,1)"
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
                                  <ColorUpdate
                                    openColorChange={openColorChange}
                                  />
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
