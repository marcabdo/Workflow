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
      <Typography variant="h4" gutterBottom>
        View User
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
          <Button variant="outlined" onClick={next}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewUser;
