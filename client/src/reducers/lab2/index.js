import { combineReducers } from 'redux';
import {
    changeColors,
    selectExerciseOption,
    changeExerciseState,
    changeUser
  } from "./ExerciseReducer";

export default combineReducers({
    changeColors,
    selectExerciseOption,
    changeExerciseState,
    changeUser,
  });