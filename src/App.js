import React from "react";
import "./styles/App.css";
import Pay from "./payment-flow/0_Base";
import Status from "./status-flow/0_Base";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/pay" element={<Pay />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </div>
    </Router>
  );
}
