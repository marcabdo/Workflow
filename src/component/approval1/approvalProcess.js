import React, { useState } from "react";
import ViewApplication from "./viewApplication.js";
import Attachments from "./attachments.js";
import Comments from "./comments.js";
import Reply from "./reply.js";
import { Button, Container, Grid, Box } from "@mui/material";

const ApprovalProcess = () => {
  const [page, setPage] = useState(1);

  const renderPage = () => {
    switch (page) {
      case 1:
        return <ViewApplication />;
      case 2:
        return <Comments />;
      case 3:
        return <Attachments />;
      case 4:
        return <Reply />;
      default:
        return <ViewApplication />;
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ marginBottom: 4 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => setPage(1)}
              sx={{
                backgroundColor: "#a9a9a9",
                fontSize: "1rem",
                padding: "10px 20px",
              }}
            >
              View Application
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => setPage(2)}
              sx={{
                backgroundColor: "#a9a9a9",
                fontSize: "1rem",
                padding: "10px 20px",
              }}
            >
              Comments
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => setPage(3)}
              sx={{
                backgroundColor: "#a9a9a9",
                fontSize: "1rem",
                padding: "10px 20px",
              }}
            >
              Attachments
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => setPage(4)}
              sx={{
                backgroundColor: "#a9a9a9",
                fontSize: "1rem",
                padding: "10px 20px",
              }}
            >
              Reply
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <div className="page">{renderPage()}</div>
      </Box>
    </Container>
  );
};

export default ApprovalProcess;
