import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import store from "./store/store";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
