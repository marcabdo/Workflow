import React, { useState } from "react";
import {
  Checkbox,
  Button,
  Grid,
  Container,
  Typography,
  Box,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto"; // Import Roboto font
import TxtTerms from "./txtterms.js";

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

const TermsConditions = ({ prev }) => {
  const [checkedBox, setCheckedBox] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* Background gradient covering the entire page */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "linear-gradient(135deg, #003366, #4169E1)", // Navy Blue to Royal Blue gradient
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
            Terms and Conditions
          </Typography>
          {/* Inner Box with form elements */}
          <Box
            sx={{
              padding: 3,
              border: `1px solid ${theme.palette.grey[300]}`,
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "background.paper",
            }}
          >
            <Paper
              elevation={1}
              sx={{
                padding: 2,
                maxHeight: 400,
                overflow: "auto",
                backgroundColor: "#f0f0f0", // Light Gray background for Paper
              }}
            >
              <TxtTerms />
            </Paper>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedBox}
                  onChange={(e) => setCheckedBox(e.target.checked)}
                  name="termsConditions"
                  color="primary"
                />
              }
              label={
                <Typography sx={{ color: theme.palette.text.primary }}>
                  I agree to the terms and conditions
                </Typography>
              }
            />
            <Grid container spacing={2} mt={2}>
              <Grid item>
                <Button variant="outlined" onClick={prev}>
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!checkedBox}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default TermsConditions;
