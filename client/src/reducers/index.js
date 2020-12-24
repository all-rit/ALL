import { combineReducers } from 'redux';
import AppReducer from './lab1/AppReducer';
import GameReducer from './lab1/GameReducer';
import RepairReducer from './lab1/RepairReducer';
import MainReducer from './MainReducer';

export default combineReducers({
	app: AppReducer,
	game: GameReducer,
	repair: RepairReducer,
	main: MainReducer
});
