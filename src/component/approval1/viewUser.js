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

const ViewUser = ({ next }) => {
  const firstName = "First Name";
  const lastName = "Last Name";
  const number = "Number";
  const email = "Email";
  const gender = "Gender";
  const education = "Education";

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
          backgroundColor="#a9a9a9"
          color="white"
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
          color="grey"
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
          label={firstName}
          variant="outlined"
          fullWidth
          value={firstName}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={lastName}
          variant="outlined"
          fullWidth
          value={lastName}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={number}
          variant="outlined"
          fullWidth
          value={number}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={email}
          variant="outlined"
          fullWidth
          value={email}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={gender}
          variant="outlined"
          fullWidth
          value={gender}
          disabled
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label={education}
          variant="outlined"
          fullWidth
          value={education}
          disabled
          sx={{ marginBottom: 2 }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="outlined"
            onClick={next}
            sx={{ transform: "translate(-217%, 0%)" }}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewUser;
