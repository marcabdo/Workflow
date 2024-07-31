import React from "react";
import {
  Checkbox,
  Button,
  Grid,
  Container,
  Typography,
  Box,
  FormControlLabel,
  Paper,
} from "@mui/material";
import TxtTerms from "./txtterms.js";

const TermsConditions = ({ prev }) => {
  const [checkedBox, setCheckedBox] = React.useState(false);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Terms and Conditions
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
        <Paper
          elevation={1}
          sx={{ padding: 2, maxHeight: 400, overflow: "auto" }}
        >
          <TxtTerms />
        </Paper>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedBox}
              onChange={(e) => setCheckedBox(e.target.checked)}
              name="termsConditions"
              color="primary"
            />
          }
          label="I agree to the terms and conditions"
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="outlined" onClick={prev}>
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" disabled={!checkedBox}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TermsConditions;
