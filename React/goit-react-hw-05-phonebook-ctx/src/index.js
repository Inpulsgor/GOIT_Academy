import React from "react";
import ReactDOM from "react-dom";
import ThemeContext from "./context/ThemeContext";
import App from "./components/app/App";
import "./index.css";

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById("root")
);
