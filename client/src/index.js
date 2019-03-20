import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { AppReducer } from './reducers/app/Reducer';
import { GameReducer } from './reducers/game/Reducer';
import { CodeEditorReducer } from './reducers/codeeditor/Reducer';
import { InstructionsReducer } from './reducers/instructions/Reducer';

const reducers = combineReducers({
	app: AppReducer,
	game: GameReducer,
	code: CodeEditorReducer,
	instructions: InstructionsReducer
});
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
