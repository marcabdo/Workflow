import logo from "./logo.svg";
import "./App.css";

import Application from "./component/applicant/application";
import React, { useState, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Registration Work Flow</h1>
      </header>
      <div>
        <Application />
      </div>
    </div>
  );
}

export default App;
