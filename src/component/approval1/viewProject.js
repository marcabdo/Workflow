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

const ViewProject = ({ prev }) => {
  const projectType = "Project Type";
  const projectName = "Project Name";
  const projectNumber = "Project Number";
  const projectDescription = "Project Description";
  const startDate = "Start Date";
  const endDate = "End Date";
  const location = "Location";

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        View Project
      </Typography>
      <Box
        sx={{
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 2,
          marginBottom: 2,
        }}
      >
        <TextField
          label={projectType}
          variant="outlined"
          fullWidth
          value={projectType}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={projectName}
          variant="outlined"
          fullWidth
          value={projectName}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={projectDescription}
          variant="outlined"
          fullWidth
          value={projectDescription}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={startDate}
          variant="outlined"
          fullWidth
          value={startDate}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={endDate}
          variant="outlined"
          fullWidth
          value={endDate}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={location}
          variant="outlined"
          fullWidth
          value={location}
          disabled
          sx={{ marginBottom: 2 }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="outlined" onClick={prev}>
            Back
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewProject;
