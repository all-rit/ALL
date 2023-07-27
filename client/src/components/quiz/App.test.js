/* eslint-disable react/no-deprecated */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "../../reducers";
import { createStore } from "redux";
const store = createStore(reducers);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
