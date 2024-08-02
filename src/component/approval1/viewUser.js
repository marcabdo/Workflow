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
        />
        <TextField
          label={lastName}
          variant="outlined"
          fullWidth
          value={lastName}
          disabled
        />
        <TextField
          label={number}
          variant="outlined"
          fullWidth
          value={number}
          disabled
        />
        <TextField
          label={email}
          variant="outlined"
          fullWidth
          value={email}
          disabled
        />
        <TextField
          label={gender}
          variant="outlined"
          fullWidth
          value={gender}
          disabled
        />
        <TextField
          label={education}
          variant="outlined"
          fullWidth
          value={education}
          disabled
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
