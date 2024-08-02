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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: darkMode,
    },
  });
  const toggleMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Button onClick={toggleMode}>Light/Dark</Button>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Application />} />
            <Route path="/21" element={<ApprovalProcess />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
