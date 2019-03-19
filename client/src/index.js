import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { AppReducer } from './AppReducer';
import { GameReducer } from './game/GameReducer';
import { CodeEditorReducer } from './codeeditor/CodeEditorReducer';

const reducers = combineReducers({ app: AppReducer, game: GameReducer, code: CodeEditorReducer });
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
