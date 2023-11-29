import { combineReducers } from "redux";
import AppReducer1 from "./lab1/AppReducer";
import ExerciseReducer1 from "./lab1/ExerciseReducer";
import RepairReducer1 from "./lab1/RepairReducer";
import AppReducer2 from "./lab2/AppReducer";
import ExerciseReducer2 from "./lab2/index";
import AppReducer3 from "./lab3/AppReducer";
import ExerciseReducer3 from "./lab3/ExerciseReducer";
import RepairReducer3 from "./lab3/RepairReducer";
import ExerciseReducer4 from "./lab4/ExerciseReducer";
import AppReducer5 from "./lab5/AppReducer";
import ExerciseReducer5 from "./lab5/ExerciseReducer";
import RepairReducer5 from "./lab5/RepairReducer";
import ExerciseReducer6 from "./lab6/ExerciseReducer";
import AppReducer7 from "./lab7/AppReducer";
import ExerciseReducer7 from "./lab7/ExerciseReducer";
import RepairReducer7 from "./lab7/RepairReducer";
import ExerciseReducer8 from "./lab8/ExerciseReducer";
import ExerciseReducer11 from "./lab11/ExerciseReducer";
import ExerciseReducer10 from "./lab10/ExerciseReducer";
import RepairReducer10 from "./lab10/RepairReducer";
import MainReducer from "./MainReducer";

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
  app7: AppReducer7,
  exercise7: ExerciseReducer7,
  repair7: RepairReducer7,
  exercise8: ExerciseReducer8,
  exercise11: ExerciseReducer11,
  exercise10: ExerciseReducer10,
  repair10: RepairReducer10,
  main: MainReducer,
});
