import {combineReducers} from 'redux';
import AppReducer1 from './lab1/AppReducer';
import ExerciseReducer1 from './lab1/ExerciseReducer';
import RepairReducer1 from './lab1/RepairReducer';
import AppReducer2 from './lab2/AppReducer';
import ExerciseReducer2 from './lab2/index';
import AppReducer3 from './lab3/AppReducer';
import ExerciseReducer3 from './lab3/ExerciseReducer';
import RepairReducer3 from './lab3/RepairReducer';
import ExerciseReducer4 from './lab4/ExerciseReducer';
import AppReducer5 from './lab5/AppReducer';
import ExerciseReducer5 from './lab5/ExerciseReducer';
import RepairReducer5 from './lab5/RepairReducer';
import ExerciseReducer6 from './lab6/ExerciseReducer';
import MainReducer from './MainReducer';

export default combineReducers({
  app1: AppReducer1,
  exercise1: ExerciseReducer1,
  repair1: RepairReducer1,
  app2: AppReducer2,
  exercise2: ExerciseReducer2,
  app3: AppReducer3,
  exercise3: ExerciseReducer3,
  repair3: RepairReducer3,
  // app4: AppReducer4,
  exercise4: ExerciseReducer4,
  // repair4: RepairReducer4,
  app5: AppReducer5,
  exercise5: ExerciseReducer5,
  repair5: RepairReducer5,
  exercise6: ExerciseReducer6,
  main: MainReducer,
});
