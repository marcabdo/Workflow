import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import ViewIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
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
import FolderIcon from "@mui/icons-material/Folder";
import AddIcon from "@mui/icons-material/Add";

const Attachements = () => {
  const [id, setId] = useState(0);
  const [rows, setRows] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [viewImage, setViewImage] = useState(null);

  const handleDeleteClick = (id) => {
    console.log("Deleting row with id:", id);
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleViewClick = (id) => {
    const row = rows.find((row) => row.id === id);
    if (row && row.file && row.file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setViewImage(reader.result);
        console.log("Viewing image:", reader.result);
      };
      reader.readAsDataURL(row.file);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log("Selected file:", selectedFile);
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        console.log("Image preview set:", reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const addAttachment = () => {
    setId((prevId) => prevId + 1);
    const newRow = {
      id: id,
      file: file,
      fileName: file.name.trim(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    console.log("Adding new row:", newRow);
    setRows((prevRows) => [...prevRows, newRow]);
    setFile(null);
    setImagePreview(null);
  };

  const columns = [
    { field: "fileName", headerName: "File Name", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "time", headerName: "Time", width: 150 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<ViewIcon />}
          label="View"
          onClick={() => handleViewClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDeleteClick(id)}
          color="inherit"
        />,
      ],
    },
  ];

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 2,
          height: "auto",
          transform: "translate(-3%, 0%)",
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
          autoHeight
          maxHeight={400}
          pagination
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
        />
        <Popup
          trigger={
            <Button variant="contained" color="primary">
              Add Attachment
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
                Add Attachment
              </Typography>
              {imagePreview != null ? (
                <Box
                  mt={2}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Typography variant="body2">Image Preview:</Typography>
                  <Box
                    mt={1}
                    component="img"
                    src={imagePreview}
                    alt="Preview"
                    sx={{
                      width: 200,
                      height: 200,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                </Box>
              ) : null}
              <>{file ? file.name : "No file selected"}</>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant="outlined" onClick={close}>
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <IconButton color="primary" component="label">
                    <Box display="flex" alignItems="center">
                      <FolderIcon />
                      <AddIcon
                        fontSize="small"
                        style={{ marginLeft: -8 }}
                      />{" "}
                      <Typography variant="body2" style={{ marginLeft: 8 }}>
                        Add an Attachment
                      </Typography>
                    </Box>
                    <input type="file" hidden onChange={handleFileChange} />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      addAttachment();
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
        {viewImage && (
          <Popup open={true} onClose={() => setViewImage(null)} modal nested>
            <Box
              sx={{
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: 2,
                position: "absolute",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="h6" gutterBottom>
                View Image
              </Typography>
              <Box
                mt={2}
                component="img"
                src={viewImage}
                alt="View"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => setViewImage(null)}
                sx={{ mt: 2 }}
              >
                Close
              </Button>
            </Box>
          </Popup>
        )}
      </Box>
    </Container>
  );
};

export default Attachements;
