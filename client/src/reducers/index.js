import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import GameReducer from './GameReducer';
import RepairReducer from './RepairReducer';

export default combineReducers({
	app: AppReducer,
	game: GameReducer,
	repair: RepairReducer
});
