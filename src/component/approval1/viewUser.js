import React from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const ViewUser = ({ next }) => {
  const theme = useTheme(); // Use the theme defined in your application

  const firstName = "First Name";
  const lastName = "Last Name";
  const number = "Number";
  const email = "Email";
  const gender = "Gender";
  const education = "Education";

  return (
    <ThemeProvider theme={theme}>
      {/* Background gradient covering the entire page */}
      <Container maxWidth="sm">
        {/* Header with two tabs: View User and View Project */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          <Typography
            variant="h5"
            sx={{
              padding: 1,
              border: `1px solid ${theme.palette.grey[300]}`,
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: theme.palette.primary.main, // Using primary color
              color: "white",
              marginRight: 2,
            }}
          >
            View User
          </Typography>
          <Typography
            variant="h5"
            sx={{
              padding: 1,
              border: `1px solid ${theme.palette.grey[300]}`,
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "white", // Using grey color for inactive tab
              color: theme.palette.text.secondary,
            }}
          >
            View Project
          </Typography>
        </Box>

        {/* User Details Display */}
        <Box
          sx={{
            padding: 3,
            border: `1px solid ${theme.palette.grey[300]}`,
            borderRadius: 2,
            boxShadow: 2,
            marginBottom: 4,
            backgroundColor: theme.palette.background.paper, // Using the background paper color
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
          />

          <Grid item>
            <Button variant="contained" color="primary" onClick={next}>
              Next
            </Button>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ViewUser;
