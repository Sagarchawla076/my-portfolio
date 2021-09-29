import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppProvider } from "./components/context/context";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
