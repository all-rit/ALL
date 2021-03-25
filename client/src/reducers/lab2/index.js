import { combineReducers } from 'redux';
import {
    changeColors,
    selectGameOption,
    changeGameState,
    changeUser
  } from "./GameReducer";

export default combineReducers({
    changeColors,
    selectGameOption,
    changeGameState,
    changeUser,
  });