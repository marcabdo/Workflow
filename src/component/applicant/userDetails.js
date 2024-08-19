import React, { useState } from "react";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Autocomplete,
  Button,
  Grid,
  Container,
  Typography,
  Box,
} from "@mui/material";
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

const UserDetails = ({ next, appSession }) => {
  const userDetails = appSession.application.userDetails;

  const [firstname, setFirst] = useState(userDetails.firstname || "");
  const [lastname, setLast] = useState(userDetails.lastname || "");
  const [number, setNumber] = useState(userDetails.number || "");
  const [email, setEmail] = useState(userDetails.email || "");
  const [gender, setGender] = useState(userDetails.gender || "");
  const [education, setEducation] = useState(userDetails.education || "");
  const [error, setError] = useState(false);

  const educationlist = [
    { value: "B.Tech", label: "B.Tech" },
    { value: "M.Tech", label: "M.Tech" },
    { value: "MBBS", label: "MBBS" },
  ];

  const changeFirst = (event) => {
    setFirst(event.target.value);
  };

  const changeLast = (event) => {
    setLast(event.target.value);
  };

  const changeNum = (event) => {
    if (event.target.value.length < 11 && !isAlphabetic(event.target.value)) {
      setNumber(event.target.value);
    }
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const reset = () => {
    setFirst("");
    setLast("");
    setNumber("");
    setEmail("");
    setGender("");
    setEducation("");
    setError(false);
  };

  function isAlphabetic(str) {
    return !/^\d+$/.test(str);
  }

  function isValidEmailAddress(address) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(address);
  }

  const test = () => {
    return (
      firstname === "" ||
      lastname === "" ||
      number === "" ||
      number.length < 10 ||
      email === "" ||
      !isValidEmailAddress(email) ||
      gender === undefined ||
      education === ""
    );
  };

  const trynext = () => {
    const hasError = test();
    setError(hasError);
    if (!hasError) {
      userDetails.firstname = firstname;
      userDetails.lastname = lastname;
      userDetails.number = number;
      userDetails.email = email;
      userDetails.gender = gender;
      userDetails.education = education;
      next();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Background gradient covering the entire page */}
      <Box
        sx={{
          backgroundImage: "linear-gradient(135deg, #003366, #4169E1)", // Navy Blue to Royal Blue gradient
          minHeight: "100vh", // Ensures gradient covers the full height of the viewport
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
            User Registration
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={firstname}
                  onChange={changeFirst}
                  error={error && firstname === ""}
                  helperText={
                    error && firstname === ""
                      ? "Please enter your first name"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={lastname}
                  onChange={changeLast}
                  error={error && lastname === ""}
                  helperText={
                    error && lastname === ""
                      ? "Please enter your last name"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={number}
                  onChange={changeNum}
                  error={error && (number === "" || number.length < 10)}
                  helperText={
                    error && (number === "" || number.length < 10)
                      ? "Please enter a valid phone number"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  value={email}
                  onChange={changeEmail}
                  error={error && (email === "" || !isValidEmailAddress(email))}
                  helperText={
                    error && (email === "" || !isValidEmailAddress(email))
                      ? "Please enter a valid email address"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  error={error && gender === undefined}
                >
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  options={educationlist}
                  getOptionLabel={(option) => option.label}
                  value={
                    educationlist.find((edu) => edu.value === education) || null
                  }
                  onChange={(event, newValue) =>
                    setEducation(newValue ? newValue.value : "")
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Education"
                      error={error && education === ""}
                      helperText={
                        error && education === ""
                          ? "Please choose your education"
                          : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={trynext}
                    >
                      Next
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" onClick={reset}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UserDetails;
