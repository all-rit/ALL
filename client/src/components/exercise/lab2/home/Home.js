/* eslint-disable react/prop-types */
import React from "react";
import "./homeStyle.css";
import Instructions from "../Instructions/instructions";
import StartExercise from "./startExercise";

/*
Component for the main home page
*/
const Home = ({
  correctColor,
  incorrectColorOne,
  incorrectColorTwo,
  startExercise,
  selectOption,
  background,
  exerciseOption,
  onChangeExerciseColors,
  enterInfoState,
  exercisesPlayed,
  enterSecondInfoState,
  alreadyCalled,
  resetBackground,
  baseBackground,
}) => {
  const colors = [
    background,
    correctColor,
    incorrectColorOne,
    incorrectColorTwo,
  ];

  // Handles switching the colors to a simulation for a selected exercise option
  if (exerciseOption !== "default") {
    onChangeExerciseColors(colors);
  }

  if (background === "white") {
    resetBackground(baseBackground);
  }

  return (
    <div>
      <div>
        <StartExercise
          selectOption={selectOption}
          startExercise={startExercise}
          exerciseOption={exerciseOption}
          onChangeExerciseColors={onChangeExerciseColors}
          colors={colors}
          enterInfoState={enterInfoState}
          exercisesPlayed={exercisesPlayed}
          enterSecondInfoState={enterSecondInfoState}
          alreadyCalled={alreadyCalled}
        />
      </div>
      <Instructions
        correctColor={correctColor}
        incorrectColorOne={incorrectColorOne}
        incorrectColorTwo={incorrectColorTwo}
      />
      <br />
      <p className="fourthTitle tw-p-5 tw-m-3">
        For educational purposes, we record all scores and actions taken in the
        exercise, along with any information you choose to give us from our
        forum.
        <br />
        For further information and to see the other labs currently in
        development for this project, visit
        <a href="http://all.rit.edu" className="allLink">
          http://all.rit.edu
        </a>
      </p>
    </div>
  );
};

export default Home;
