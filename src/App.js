import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Application from "./component/applicant/application";
import ApprovalProcess from "./component/approval1/approvalProcess";
import React, { useState, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Application />} />
        <Route path="/21" element={<ApprovalProcess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
