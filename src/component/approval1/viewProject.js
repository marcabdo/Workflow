import React from "react";
import {
  TextField,
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
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
        <Typography
          variant="h5"
          sx={{
            padding: 1,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: 2,
            color: "grey",
            marginRight: 2,
          }}
        >
          View User
        </Typography>
        <Typography
          variant="h5"
          sx={{
            padding: 1,
            border: "1px solid #ccc",
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: "#a9a9a9",
            color: "white",
          }}
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
          marginBottom: 4,
          backgroundColor: "white", // Ensure the background is white
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
        />
      </Box>

      {/* Back Button */}
      <Grid container justifyContent="center">
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
