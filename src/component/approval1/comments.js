import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Popup from "reactjs-popup";

// Declare Comments, id, and row array for later storage
const Comments = () => {
  const [comment, setComment] = useState("");
  const [id, setId] = useState(0);
  const [rows, setRows] = useState([]);

  const handleDeleteClick = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };
  /* addComment adds a new comment row, and adds one to previous comment ID#. 
Also sets comment text box to an empty string to prepare for new comments
*/
  const addComment = () => {
    setId((prevId) => prevId + 1);
    const newRows = {
      id: id,
      col1: comment.trim(),
      col2: new Date().toLocaleDateString(),
      col3: new Date().toLocaleTimeString(),
    };
    setRows((prevRows) => [...prevRows, newRows]);
    setComment("");
  };
  // Declare Columns
  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
    { field: "col3", headerName: "Column 3", width: 150 },
    // Add delete functionality, as well as secondary confirmation popup to delete row data
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      getActions: ({ id }) => [
        <Popup
          trigger={
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={() => handleDeleteClick(id)}
              color="inherit"
            />
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
                position: "absolute",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Delete Comment
              </Typography>
              <Typography variant="body1" gutterBottom>
                Are you sure you want to delete this comment?
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="outlined" onClick={close}>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleDeleteClick(id);
                      close();
                    }}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Popup>,
      ],
    },
  ];

  // Create Datagrid, Add Comment popup with cancel and submit buttons, Add comment button, and basic styling
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
          disableColumnReorder
          disableColumnResize
          disableColumnSorting
          disableColumnMenu
          zIndex={0}
        />
        <Popup
          trigger={
            <Button variant="contained" color="primary">
              Add Comment
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
                position: "absolute",
                transform: "translate(-50%, -50%)",
                width: 700,
                height: 400,
                bgcolor: "background.paper",
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
                rows={10}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="outlined" onClick={close}>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      addComment();
                      close();
                    }}
                  >
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
