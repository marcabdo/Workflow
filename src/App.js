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
import {
  Button,
  Typography,
  DataGrid,
  AppBar,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";

// Define your theme with the chosen color palette and font settings
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700, // Bold for headings
    },
    body1: {
      fontWeight: 400, // Regular for body text
    },
  },
  palette: {
    primary: {
      main: "#003366", // Navy Blue
    },
    secondary: {
      main: "#4169E1", // Royal Blue
    },
    text: {
      primary: "#000000", // Black for primary text
      secondary: "#4D4D4D", // Dark Gray for secondary text
    },
    background: {
      default: "#FFFFFF", // White background
      paper: "#F8F8F8", // Light Gray for paper elements
    },
    grey: {
      300: "#D3D3D3", // Light Gray
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Application />} />
            <Route path="/21" element={<ApprovalProcess />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
