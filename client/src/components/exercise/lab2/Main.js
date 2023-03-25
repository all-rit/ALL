/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "./components/header/title";
import Home from "./home/Home";
import ExerciseCenter from "./components/ExerciseCenter";
import Repair from "./components/Repair.js";
import Header from "./components/header/headerMain";
import SuccessMessage from "./home/successMessage";
import Countdown from "react-countdown-now";
import Form from "./forms/form";
import LandingPage from "./LandingPage/landingPage";
import UserStats from "./userStatistics/userStats";
import SecondInstructions from "./Instructions/secondInstructions";
import ThirdInstructions from "./Instructions/thirdInstructions";
import FourthInstructions from "./Instructions/fourthInstructions";
import Conclusion from "./Instructions/conclusion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
// Imports from redux actions
import {
  changeDefaultColors,
  changeExerciseColors,
  selectExerciseOption,
  activatePopup,
  startExercise,
  endExercise,
  resetOption,
  resetColors,
  resetChange,
  closeInfoPopup,
  openAboutPage,
  closeAboutPage,
  openStatPage,
  closeStatPage,
  endFirstExercise,
  enterInfoState,
  closeInfoState,
  enterSecondInfoState,
  closeSecondInfoState,
  openThirdInfoState,
  closeThirdInfoState,
  openConclusion,
  toWhiteBackground,
  resetBackground,
  openColorChange,
  closeColorChange,
  toGreyBackground,
  resetSystem,
  goBackFromExercise,
} from "../../../reducers/lab2/actions";

library.add(faQuestionCircle);

const mapStateToProps = (state) => {
  return {
    baseBackground: state.exercise2.changeColors.baseBackground,
    baseRightCircle: state.exercise2.changeColors.baseRightCircle,
    baseWrongCircleOne: state.exercise2.changeColors.baseWrongCircleOne,
    baseWrongCircleTwo: state.exercise2.changeColors.baseWrongCircleTwo,
    exerciseBackground: state.exercise2.changeColors.exerciseBackground,
    exerciseRightCircle: state.exercise2.changeColors.exerciseRightCircle,
    exerciseWrongCircleOne: state.exercise2.changeColors.exerciseWrongCircleOne,
    exerciseWrongCircleTwo: state.exercise2.changeColors.exerciseWrongCircleTwo,
    exerciseOption: state.exercise2.selectExerciseOption.option,
    popup: state.exercise2.changeColors.popup,
    exerciseState: state.exercise2.changeExerciseState.exerciseState,
    changed: state.exercise2.changeColors.changed,
    infoPopup: state.exercise2.changeUser.infoPopup,
    aboutState: state.exercise2.changeExerciseState.aboutState,
    statState: state.exercise2.changeExerciseState.statState,
    firstExercise: state.exercise2.changeExerciseState.firstExercise,
    secondInfoState: state.exercise2.changeExerciseState.secondInfoState,
    thirdInfoState: state.exercise2.changeExerciseState.thirdInfoState,
    exercisesPlayed: state.exercise2.changeExerciseState.exercisesPlayed,
    fourthInfoState: state.exercise2.changeExerciseState.fourthInfoState,
    endSystem: state.exercise2.changeExerciseState.endSystem,
    colorChange: state.exercise2.changeExerciseState.colorChangeState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeDefaultColors: (event) => dispatch(changeDefaultColors(event)),
    onChangeExerciseColors: (event) => dispatch(changeExerciseColors(event)),
    onSelectOption: (event) => dispatch(selectExerciseOption(event)),
    popupController: (event) => dispatch(activatePopup(event)),
    onStartExercise: () => dispatch(startExercise()),
    onEndExercise: () => dispatch(endExercise()),
    onResetOption: () => dispatch(resetOption()),
    onResetColors: () => dispatch(resetColors()),
    onResetChange: () => dispatch(resetChange()),
    onCloseInfoPopup: () => dispatch(closeInfoPopup()),
    onOpenAboutPage: () => dispatch(openAboutPage()),
    onCloseAboutPage: () => dispatch(closeAboutPage()),
    onOpenStatPage: () => dispatch(openStatPage()),
    onCloseStatPage: () => dispatch(closeStatPage()),
    onEndFirstExercise: () => dispatch(endFirstExercise()),
    onEnterInfoState: () => dispatch(enterInfoState()),
    onCloseInfoState: () => dispatch(closeInfoState()),
    onEnterSecondInfoState: () => dispatch(enterSecondInfoState()),
    onCloseSecondInfoState: () => dispatch(closeSecondInfoState()),
    onOpenThirdInfoState: () => dispatch(openThirdInfoState()),
    onCloseThirdInfoState: () => dispatch(closeThirdInfoState()),
    onOpenConclusion: () => dispatch(openConclusion()),
    onToWhiteBackground: () => dispatch(toWhiteBackground()),
    onResetBackground: (event) => dispatch(resetBackground(event)),
    onOpenColorChange: () => dispatch(openColorChange()),
    onCloseColorChange: () => dispatch(closeColorChange()),
    onToGreyBackground: () => dispatch(toGreyBackground()),
    onResetSystem: () => dispatch(resetSystem()),
    onGoBackFromExercise: () => dispatch(goBackFromExercise()),
  };
};

class Main extends Component {
  shouldComponentUpdate(nextprops) {
    if (nextprops.exerciseState !== this.props.exerciseState) {
      return true;
    }
    if (nextprops.baseBackground !== this.props.baseBackground) {
      return true;
    }
    if (nextprops.baseRightCircle !== this.props.baseRightCircle) {
      return true;
    }
    if (nextprops.baseWrongCircleOne !== this.props.baseWrongCircleOne) {
      return true;
    }
    if (nextprops.baseWrongCircleTwo !== this.props.baseWrongCircleTwo) {
      return true;
    }
    if (nextprops.exerciseBackground !== this.props.exerciseBackground) {
      return true;
    }
    if (nextprops.exerciseRightCircle !== this.props.exerciseRightCircle) {
      return true;
    }
    if (
      nextprops.exerciseWrongCircleOne !== this.props.exerciseWrongCircleOne
    ) {
      return true;
    }
    if (
      nextprops.exerciseWrongCircleTwo !== this.props.exerciseWrongCircleTwo
    ) {
      return true;
    }
    if (nextprops.exerciseOption !== this.props.exerciseOption) {
      return true;
    }
    if (
      nextprops.exerciseWrongCircleTwo !== this.props.exerciseWrongCircleTwo
    ) {
      return true;
    }
    if (nextprops.changed !== this.props.changed) {
      return true;
    }
    if (nextprops.infoPopup !== this.props.infoPopup) {
      return true;
    }
    if (nextprops.aboutState !== this.props.aboutState) {
      return true;
    }
    if (nextprops.statState !== this.props.statState) {
      return true;
    }
    if (nextprops.firstExercise !== this.props.firstExercise) {
      return true;
    }
    if (nextprops.secondInfoState !== this.props.secondInfoState) {
      return true;
    }
    if (nextprops.thirdInfoState !== this.props.thirdInfoState) {
      return true;
    }
    if (nextprops.exercisesPlayed !== this.props.exercisesPlayed) {
      return true;
    }
    if (nextprops.fourthInfoState !== this.props.fourthInfoState) {
      return true;
    }
    if (nextprops.endSystem !== this.props.endSystem) {
      return true;
    }
    if (nextprops.colorChange !== this.props.colorChange) {
      return true;
    }
    return false;
  }

  render() {
    // Props from redux used in the application
    const {
      user,
      onChangeDefaultColors,
      onChangeExerciseColors,
      exerciseState,
      onStartExercise,
      onEndExercise,
      onSelectOption,
      baseBackground,
      baseRightCircle,
      baseWrongCircleOne,
      baseWrongCircleTwo,
      exerciseBackground,
      exerciseRightCircle,
      exerciseWrongCircleOne,
      exerciseWrongCircleTwo,
      exerciseOption,
      popupController,
      onResetOption,
      onResetColors,
      changed,
      onResetChange,
      onCloseInfoPopup,
      infoPopup,
      aboutState,
      onOpenAboutPage,
      onCloseAboutPage,
      onOpenStatPage,
      onCloseStatPage,
      statState,
      onEndFirstExercise,
      firstExercise,
      secondInfoState,
      onEnterInfoState,
      onCloseInfoState,
      thirdInfoState,
      onEnterSecondInfoState,
      onCloseSecondInfoState,
      exercisesPlayed,
      fourthInfoState,
      onOpenThirdInfoState,
      onCloseThirdInfoState,
      endSystem,
      onOpenConclusion,
      onToWhiteBackground,
      onResetBackground,
      onOpenColorChange,
      onCloseColorChange,
      colorChange,
      onToGreyBackground,
      onResetSystem,
      onGoBackFromExercise,
      isImagine,
    } = this.props;

    // establishing array of current colors for the system
    const colors = [
      baseBackground,
      baseRightCircle,
      baseWrongCircleOne,
      baseWrongCircleTwo,
    ];

    // custom renderer for top of page popup
    // popup occurs after a successful change to the colors in the system
    const renderer = (props) => {
      if (props.total > 0) {
        return (
          <div className="successPopup">
            <SuccessMessage />
          </div>
        );
      } else {
        onResetChange();
        return null;
      }
    };

    return (
      <div className="container">
        {infoPopup ? (
          <Form closeInfoPopup={onCloseInfoPopup} />
        ) : (
          <div style={{ background: `${exerciseBackground}` }} className="main">
            {changed ? (
              <Countdown
                date={Date.now() + 5000}
                intervalDelay={1000}
                precision={2}
                renderer={renderer}
              />
            ) : null}
            <Header
              endSystem={endSystem}
              exerciseState={exerciseState}
              firstExercise={firstExercise}
              popupController={popupController}
              exerciseMode={exerciseOption}
              colors={colors}
              goBackFromExercise={onGoBackFromExercise}
              changeExerciseColors={onChangeExerciseColors}
              openAboutPage={onOpenAboutPage}
              closeAboutPage={onCloseAboutPage}
              aboutState={aboutState}
              openStatPage={onOpenStatPage}
              closeStatPage={onCloseStatPage}
              statState={statState}
              exercisesPlayed={exercisesPlayed}
              openColorChange={onOpenColorChange}
              thirdInfoState={thirdInfoState}
              colorChange={colorChange}
              closeColorChange={onCloseColorChange}
              openSecondInfoState={onEnterSecondInfoState}
            />
            {exerciseState ? (
              <div>
                <ExerciseCenter
                  exerciseEnded={onEndExercise}
                  correctColor={exerciseRightCircle}
                  incorrectColorOne={exerciseWrongCircleOne}
                  incorrectColorTwo={exerciseWrongCircleTwo}
                  exerciseOption={exerciseOption}
                  background={exerciseBackground}
                  selectOption={onSelectOption}
                  resetOption={onResetOption}
                  onChangeExerciseColors={onChangeExerciseColors}
                  colors={colors}
                  resetColors={onResetColors}
                  enterInfoState={onEnterInfoState}
                  enterSecondInfoState={onEnterSecondInfoState}
                  exercisesPlayed={exercisesPlayed}
                  enterThirdInfoState={onOpenThirdInfoState}
                />
              </div>
            ) : (
              <div>
                {statState ? (
                  <UserStats
                    toWhiteBackground={onToWhiteBackground}
                    background={baseBackground}
                  />
                ) : (
                  <div>
                    {secondInfoState ? (
                      <SecondInstructions
                        closePage={onCloseInfoState}
                        selectOption={onSelectOption}
                        toWhiteBackground={onToWhiteBackground}
                        background={baseBackground}
                      />
                    ) : (
                      <div>
                        {thirdInfoState ? (
                          <ThirdInstructions
                            closePage={onCloseSecondInfoState}
                            selectOption={onSelectOption}
                            activatePopup={onOpenColorChange}
                            toWhiteBackground={onToWhiteBackground}
                            background={baseBackground}
                            isImagine={isImagine}
                          />
                        ) : (
                          <div>
                            {fourthInfoState ? (
                              <FourthInstructions
                                closePage={onCloseThirdInfoState}
                                activatePopup={onOpenColorChange}
                                endSystem={onOpenConclusion}
                                toWhiteBackground={onToWhiteBackground}
                                background={baseBackground}
                                user={user}
                              />
                            ) : (
                              <div>
                                {endSystem ? (
                                  <Conclusion resetSystem={onResetSystem} />
                                ) : (
                                  <div>
                                    {firstExercise && !isImagine ? (
                                      <LandingPage
                                        endFirstExercise={onEndFirstExercise}
                                        toWhiteBackground={onToWhiteBackground}
                                        background={baseBackground}
                                      />
                                    ) : (
                                      <div>
                                        {colorChange ? (
                                          <Repair
                                            changeDefaultColors={
                                              onChangeDefaultColors
                                            }
                                            changeExerciseColors={
                                              onChangeExerciseColors
                                            }
                                            popupController={popupController}
                                            closeColorChange={
                                              onCloseColorChange
                                            }
                                            colors={colors}
                                            toGreyBackground={
                                              onToGreyBackground
                                            }
                                            background={baseBackground}
                                          />
                                        ) : (
                                          <div>
                                            <Title
                                              exerciseState={exerciseState}
                                            />
                                            <Home
                                              background={exerciseBackground}
                                              onChangeExerciseColors={
                                                onChangeExerciseColors
                                              }
                                              exerciseOption={exerciseOption}
                                              correctColor={exerciseRightCircle}
                                              incorrectColorOne={
                                                exerciseWrongCircleOne
                                              }
                                              incorrectColorTwo={
                                                exerciseWrongCircleTwo
                                              }
                                              startExercise={onStartExercise}
                                              selectOption={onSelectOption}
                                              exercisesPlayed={exercisesPlayed}
                                              resetBackground={
                                                onResetBackground
                                              }
                                              baseBackground={baseBackground}
                                            />
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
