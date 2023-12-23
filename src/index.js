import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContext from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={<App />}
          />
        </Routes>
      </Router>
    </AppContext>
  </React.StrictMode>
);
