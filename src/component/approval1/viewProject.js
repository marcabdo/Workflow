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
      <Box
        sx={{
          marginBottom: 2,
          transform: "translate(-27%, 0%)",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          display="inline"
          padding={1}
          border="1px solid #ccc"
          borderRadius={2}
          boxShadow={2}
          color="grey"
        >
          View User
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          display="inline"
          padding={1}
          border="1px solid #ccc"
          borderRadius={2}
          boxShadow={2}
          backgroundColor="#a9a9a9"
          color="white"
        >
          View Project
        </Typography>
      </Box>
      <Box
        sx={{
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 2,
          marginBottom: 2,
          transform: "translate(-27%, 0%)",
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
          <Button
            variant="outlined"
            onClick={prev}
            sx={{ transform: "translate(-217%, 0%)" }}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewProject;
