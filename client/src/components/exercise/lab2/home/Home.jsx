/* eslint-disable react/prop-types */
import './homeStyle.css';
import Instructions from '../Instructions/instructions';
import StartExercise from './startExercise';

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
  if (exerciseOption !== 'default') {
    onChangeExerciseColors(colors);
  }

  if (background === 'white') {
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
    </div>
  );
};

export default Home;
