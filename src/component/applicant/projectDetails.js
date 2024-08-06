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
    { value: "Hyderabad", label: "Bangalore" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Chennai", label: "Chennai" },
  ];

  const changeProjectName = (event) => {
    const newProjectName = event.target.value;
    setProjectName(newProjectName);
  };

  const changeProjectNumber = (event) => {
    const newProjectNumber = event.target.value;
    setProjectNumber(newProjectNumber);
  };

  const changeProjectDescription = (event) => {
    const newProjectDescription = event.target.value;
    setProjectDescription(newProjectDescription);
  };

  const changeStartDate = (event) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
  };

  const changeEndDate = (event) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
  };
  // Reset button values
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
    if (
      projectType === "" ||
      projectName === "" ||
      projectNumber === "" ||
      projectDescription === "" ||
      startDate === "" ||
      endDate === "" ||
      location === ""
    ) {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
    }
  };
  // Test function for determining all of the inputs are valid, if valid save data in projectDetails
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
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Project Details
      </Typography>
      <Box
        sx={{
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Autocomplete
              options={projectTypeList}
              getOptionLabel={(option) => option.label}
              value={
                projectTypeList.find((type) => type.value === projectType) ||
                null
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
                error && projectName === "" ? "Please enter a project name" : ""
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
              value={locationList.find((loc) => loc.value === location) || null}
              onChange={(event, newValue) =>
                setLocation(newValue ? newValue.value : "")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Location"
                  error={error && location === ""}
                  helperText={
                    error && location === "" ? "Please choose a location" : ""
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
                <Button variant="contained" color="primary" onClick={trynext}>
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
  );
};

export default ProjectDetails;
