import React, { useState } from "react";
import ViewApplication from "./viewApplication.js";
import Attachments from "./attachments.js";
import Comments from "./comments.js";
import Reply from "./reply.js";
import { Button, Container, Grid, Box, AppBar, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto"; // Import Roboto font

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

const ApprovalProcess = () => {
  const [page, setPage] = useState(1);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <ViewApplication />;
      case 2:
        return <Comments />;
      case 3:
        return <Attachments />;
      case 4:
        return <Reply />;
      default:
        return <ViewApplication />;
    }
  };

  // Determine if a gradient background should be applied for specific pages
  const applyGradient = page === 1 || page === 2 || page === 3 || page === 4;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          ...(applyGradient && {
            backgroundImage: "linear-gradient(135deg, #003366, #4169E1)", // Navy Blue to Royal Blue gradient
          }),
        }}
      >
        {/* AppBar containing the buttons */}

        <Toolbar>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant={page === 1 ? "contained" : "outlined"}
                color="secondary"
                onClick={() => setPage(1)}
                sx={{
                  fontSize: "1rem",
                  padding: "10px 20px",
                }}
              >
                View Application
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant={page === 2 ? "contained" : "outlined"}
                color="secondary"
                onClick={() => setPage(2)}
                sx={{
                  fontSize: "1rem",
                  padding: "10px 20px",
                }}
              >
                Comments
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant={page === 3 ? "contained" : "outlined"}
                color="secondary"
                onClick={() => setPage(3)}
                sx={{
                  fontSize: "1rem",
                  padding: "10px 20px",
                }}
              >
                Attachments
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant={page === 4 ? "contained" : "outlined"}
                color="secondary"
                onClick={() => setPage(4)}
                sx={{
                  fontSize: "1rem",
                  padding: "10px 20px",
                }}
              >
                Reply
              </Button>
            </Grid>
          </Grid>
        </Toolbar>

        {/* Main content area */}

        <Box sx={{ marginTop: 4 }}>
          <div className="page">{renderPage()}</div>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ApprovalProcess;
