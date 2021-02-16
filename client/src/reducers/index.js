import { combineReducers } from 'redux';
import AppReducer1 from './lab1/AppReducer';
import GameReducer1 from './lab1/GameReducer';
import RepairReducer1 from './lab1/RepairReducer';
import AppReducer3 from './lab3/AppReducer';
import GameReducer3 from './lab3/GameReducer';
import RepairReducer3 from './lab3/RepairReducer';
import GameReducer4 from './lab4/GameReducer';
import MainReducer from './MainReducer';

export default combineReducers({
	app1: AppReducer1,
	game1: GameReducer1,
	repair1: RepairReducer1,
	app3: AppReducer3,
	game3: GameReducer3,
	repair3: RepairReducer3,
	// app4: AppReducer4,
	game4: GameReducer4,
	// repair4: RepairReducer4,
	main: MainReducer
});
