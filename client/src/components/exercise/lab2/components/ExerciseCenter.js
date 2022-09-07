/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { Component } from "react";
import Exercise from "./exercise.js";

/*
Class for connecting the exercise component to the main system
*/
class ExerciseCenter extends Component {
  // Renderer for the exercise page
  render() {
    const {
      correctColor,
      incorrectColorOne,
      incorrectColorTwo,
      background,
      exerciseOption,
      resetOption,
      onChangeExerciseColors,
      colors,
      resetColors,
      selectOption,
      exerciseEnded,
      enterInfoState,
      enterSecondInfoState,
      exercisesPlayed,
      enterThirdInfoState,
    } = this.props;

    return (
      <Exercise
        exerciseEnded={exerciseEnded}
        correctColor={correctColor}
        incorrectColorOne={incorrectColorOne}
        incorrectColorTwo={incorrectColorTwo}
        background={background}
        exerciseOption={exerciseOption}
        selectOption={selectOption}
        resetOption={resetOption}
        onChangeExerciseColors={onChangeExerciseColors}
        colors={colors}
        resetColors={resetColors}
        enterInfoState={enterInfoState}
        enterSecondInfoState={enterSecondInfoState}
        exercisesPlayed={exercisesPlayed}
        enterThirdInfoState={enterThirdInfoState}
      />
    );
  }
}

export default ExerciseCenter;
