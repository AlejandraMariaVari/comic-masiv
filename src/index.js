import React from "react";
import ReactDOM from "react-dom";
import Comic from "./components/Comic";

import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

import "./styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Comic />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
