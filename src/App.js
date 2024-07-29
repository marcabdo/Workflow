import logo from "./logo.svg";
import "./App.css";

import Application from "./component/applicant/application";
import React, { useState, useEffect } from "react";

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
