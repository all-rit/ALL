import React from 'react';
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reducers from "./reducers";
// import * as serviceWorker from "./serviceWorker";
import MainContextProvider from "./reducers/MainContext";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <MainContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MainContextProvider>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
