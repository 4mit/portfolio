import React from "react";
import ReactDOM from "react-dom";

import App from "./App";


navigator.serviceWorker.register('./sw.js')

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
