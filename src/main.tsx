import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { env } from "./utils/env-variable";

if (env.enableMock) {
  require("~/mocks/setup");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
