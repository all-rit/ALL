/* eslint-disable react/no-deprecated */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reducers from "./reducers";
import sagas from "./sagas";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";

if (process.env.NODE_ENV === "production") {
  const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App store={store} />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
