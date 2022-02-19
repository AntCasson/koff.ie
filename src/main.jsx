import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => console.log("sw is registered!", reg))
    .catch(err => console.log("sw is not registered!", err));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
