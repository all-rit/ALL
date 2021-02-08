import { combineReducers } from 'redux';
import AppReducer1 from './lab1/AppReducer';
import GameReducer1 from './lab1/GameReducer';
import RepairReducer1 from './lab1/RepairReducer';
import AppReducer3 from './lab3/AppReducer';
import GameReducer3 from './lab3/GameReducer';
import RepairReducer3 from './lab3/RepairReducer';
import MainReducer from './MainReducer';

export default combineReducers({
	app1: AppReducer1,
	game1: GameReducer1,
	repair1: RepairReducer1,
	app3: AppReducer3,
	game3: GameReducer3,
	repair3: RepairReducer3,
	main: MainReducer
});
