import { combineReducers } from 'redux';
import AppReducer1 from './lab1/AppReducer';
import GameReducer1 from './lab1/GameReducer';
import RepairReducer1 from './lab1/RepairReducer';
import AppReducer3 from './lab3/AppReducer';
import GameReducer3 from './lab3/GameReducer';
import RepairReducer3 from './lab3/RepairReducer';
import AppReducer5 from './lab5/AppReducer';
import GameReducer5 from './lab5/GameReducer';
import RepairReducer5 from './lab5/RepairReducer';
import MainReducer from './MainReducer';

export default combineReducers({
	app1: AppReducer1,
	game1: GameReducer1,
	repair1: RepairReducer1,
	app3: AppReducer3,
	game3: GameReducer3,
	repair3: RepairReducer3,
	app5: AppReducer5,
	game5: GameReducer5,
	repair5: RepairReducer5,
	main: MainReducer
});
