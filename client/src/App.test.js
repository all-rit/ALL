import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';

import reducers from './reducers';
import sagas from './sagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithStore />, div);
  ReactDOM.unmountComponentAtNode(div);
});

