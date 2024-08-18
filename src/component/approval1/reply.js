import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const Reply = () => {
  const [approval, setApproval] = useState("");

  const handleSubmit = () => {
    console.log("Approval Status:", approval);
    setApproval("");
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 2,
          marginTop: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add Reply
        </Typography>
        <FormControl component="fieldset" sx={{ marginTop: 2 }}>
          <FormLabel component="legend">Approval Status</FormLabel>
          <RadioGroup
            value={approval}
            onChange={(e) => setApproval(e.target.value)}
          >
            <FormControlLabel
              value="approved"
              control={<Radio />}
              label="Approved"
            />
            <FormControlLabel
              value="approved_with_condition"
              control={<Radio />}
              label="Approved with Condition"
            />
            <FormControlLabel
              value="denied"
              control={<Radio />}
              label="Denied"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Explanation"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          sx={{ marginTop: 2 }}
        />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item>
            <Button variant="outlined" onClick={() => setApproval("")}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Reply;
