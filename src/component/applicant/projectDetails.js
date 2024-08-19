import React, { useState } from "react";
import {
  TextField,
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

const ProjectDetails = ({ prev, next, appSession }) => {
  const projectDetails = appSession.application.projectDetails;

  const [projectType, setProjectType] = useState(
    projectDetails.projectType || ""
  );
  const [projectName, setProjectName] = useState(
    projectDetails.projectName || ""
  );
  const [projectNumber, setProjectNumber] = useState(
    projectDetails.projectNumber || ""
  );
  const [projectDescription, setProjectDescription] = useState(
    projectDetails.projectDescription || ""
  );
  const [startDate, setStartDate] = useState(projectDetails.startDate || "");
  const [endDate, setEndDate] = useState(projectDetails.endDate || "");
  const [location, setLocation] = useState(projectDetails.location || "");
  const [error, setError] = useState(false);

  const projectTypeList = [
    { value: "Web Development", label: "Web Development" },
    { value: "App Development", label: "App Development" },
    { value: "Machine Learning", label: "Machine Learning" },
  ];

  const locationList = [
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
  ];

  const changeProjectName = (event) => {
    setProjectName(event.target.value);
  };

  const changeProjectNumber = (event) => {
    setProjectNumber(event.target.value);
  };

  const changeProjectDescription = (event) => {
    setProjectDescription(event.target.value);
  };

  const changeStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const changeEndDate = (event) => {
    setEndDate(event.target.value);
  };

  const reset = () => {
    setProjectType("");
    setProjectName("");
    setProjectNumber("");
    setProjectDescription("");
    setStartDate("");
    setEndDate("");
    setLocation("");
  };

  const test = () => {
    return (
      projectType === "" ||
      projectName === "" ||
      projectNumber === "" ||
      projectDescription === "" ||
      startDate === "" ||
      endDate === "" ||
      location === ""
    );
  };

  const trynext = () => {
    const hasError = test();
    setError(hasError);
    if (!hasError) {
      projectDetails.projectType = projectType;
      projectDetails.projectName = projectName;
      projectDetails.projectNumber = projectNumber;
      projectDetails.projectDescription = projectDescription;
      projectDetails.startDate = startDate;
      projectDetails.endDate = endDate;
      projectDetails.location = location;
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
            Project Details
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
                <Autocomplete
                  options={projectTypeList}
                  getOptionLabel={(option) => option.label}
                  value={
                    projectTypeList.find(
                      (type) => type.value === projectType
                    ) || null
                  }
                  onChange={(event, newValue) =>
                    setProjectType(newValue ? newValue.value : "")
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Project Type"
                      error={error && projectType === ""}
                      helperText={
                        error && projectType === ""
                          ? "Please choose a project type"
                          : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Name"
                  value={projectName}
                  onChange={changeProjectName}
                  error={error && projectName === ""}
                  helperText={
                    error && projectName === ""
                      ? "Please enter a project name"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Number"
                  value={projectNumber}
                  onChange={changeProjectNumber}
                  error={error && projectNumber === ""}
                  helperText={
                    error && projectNumber === ""
                      ? "Please enter a valid project number"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Description"
                  value={projectDescription}
                  onChange={changeProjectDescription}
                  error={error && projectDescription === ""}
                  helperText={
                    error && projectDescription === ""
                      ? "Please enter a project description"
                      : ""
                  }
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={startDate}
                  onChange={changeStartDate}
                  error={error && startDate === ""}
                  helperText={
                    error && startDate === "" ? "Please enter a start date" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={endDate}
                  onChange={changeEndDate}
                  error={error && endDate === ""}
                  helperText={
                    error && endDate === "" ? "Please enter an end date" : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  options={locationList}
                  getOptionLabel={(option) => option.label}
                  value={
                    locationList.find((loc) => loc.value === location) || null
                  }
                  onChange={(event, newValue) =>
                    setLocation(newValue ? newValue.value : "")
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Location"
                      error={error && location === ""}
                      helperText={
                        error && location === ""
                          ? "Please choose a location"
                          : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="outlined" onClick={prev}>
                      Previous
                    </Button>
                  </Grid>
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

export default ProjectDetails;
