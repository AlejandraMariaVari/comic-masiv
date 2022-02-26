import React from "react";
import ReactDOM from "react-dom";
import Comic from "./components/Comic";

import { Provider } from "react-redux";
import store from "./redux/store";



ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
       <Comic />
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
