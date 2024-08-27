/* eslint-disable react/no-deprecated */
/* eslint-disable no-undef */
import { createRoot } from "react-dom/client";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga";
import { MainContextProvider } from "./reducers/MainContext";

if (process.env.NODE_ENV === "production") {
  const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const store = createStore(reducers);

// sagaMiddleware.run(sagas);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
