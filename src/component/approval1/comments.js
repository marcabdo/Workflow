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
import { DataGrid } from "@mui/x-data-grid";
import Popup from "reactjs-popup";

const Comments = ({}) => {
  const [rows, setRows] = useState([]);

  const columns = [
    {
      field: "col1",
      headerName: "Column 1",
      width: 100,
    },
    { field: "col2", headerName: "Column 2", width: 100 },
    { field: "col3", headerName: "Column 3", width: 100 },
  ];
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnReorder={true}
          disableColumnResize={true}
          disableColumnSorting={true}
          disableColumnMenu={true}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
        />
        <Popup
          trigger={
            <Button variant="contained" color="primary">
              {" "}
              Add Comment{" "}
            </Button>
          }
          modal
          nested
        >
          {(close) => (
            <Box
              sx={{
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Add Comment
              </Typography>
              <TextField
                label="Comment"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="outlined" onClick={close}>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Popup>
      </Box>
    </Container>
  );
};

export default Comments;
