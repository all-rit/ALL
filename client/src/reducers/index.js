import { combineReducers } from 'redux';
import AppReducer1 from './lab1/AppReducer';
import GameReducer1 from './lab1/GameReducer';
import RepairReducer1 from './lab1/RepairReducer';
import AppReducer2 from './lab2/AppReducer';
import GameReducer2 from './lab2/index';
import AppReducer3 from './lab3/AppReducer';
import GameReducer3 from './lab3/GameReducer';
import RepairReducer3 from './lab3/RepairReducer';
import GameReducer4 from './lab4/GameReducer';
import AppReducer5 from './lab5/AppReducer';
import GameReducer5 from './lab5/GameReducer';
import RepairReducer5 from './lab5/RepairReducer';
import MainReducer from './MainReducer';

export default combineReducers({
	app1: AppReducer1,
	game1: GameReducer1,
	repair1: RepairReducer1,
	app2: AppReducer2,
	game2: GameReducer2,
	app3: AppReducer3,
	game3: GameReducer3,
	repair3: RepairReducer3,
	// app4: AppReducer4,
	game4: GameReducer4,
	// repair4: RepairReducer4,
	app5: AppReducer5,
	game5: GameReducer5,
	repair5: RepairReducer5,
	main: MainReducer
});
