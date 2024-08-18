import React, { useState, Component } from "react";
import ViewApplication from "./viewApplication.js";
import Attachments from "./attachments.js";
import Comments from "./comments.js";
import Reply from "./reply.js";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Box,
} from "@mui/material";

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
      <Button onClick={() => setPage(1)}>View Application</Button>
      <Button onClick={() => setPage(2)}>Comments</Button>
      <Button onClick={() => setPage(3)}>Attachments</Button>
      <Button onClick={() => setPage(4)}>Reply</Button>
      <div className="page">{renderPage()}</div>
    </Container>
  );
};
export default ApprovalProcess;
