import React, { useState } from "react";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Grid,
  Container,
  Typography,
} from "@mui/material";

const UserDetails = ({ next, appSession }) => {
  const userDetails = appSession.application.userDetails;

  // All entries are stored in state
  const [firstname, setFirst] = useState(userDetails.firstname || "");
  const [lastname, setLast] = useState(userDetails.lastname || "");
  const [number, setNumber] = useState(userDetails.number || "");
  const [email, setEmail] = useState(userDetails.email || "");
  const [gender, setGender] = useState(userDetails.gender || "");
  const [education, setEducation] = useState(userDetails.education || "");
  const [error, setError] = useState(false);

  // Preset education list
  const educationlist = [
    { value: 0, label: "B.Tech" },
    { value: 1, label: "M.Tech" },
    { value: 2, label: "MBBS" },
  ];

  // Functions to change state
  const changeFirst = (event) => {
    const newfirst = event.target.value;
    setFirst(newfirst);
  };

  const changeLast = (event) => {
    const newlast = event.target.value;
    setLast(newlast);
  };

  const changeNum = (event) => {
    if (event.target.value.length < 11 && !isAlphabetic(event.target.value)) {
      const newnumber = event.target.value;
      setNumber(newnumber);
    }
  };

  const changeEmail = (event) => {
    const newemail = event.target.value;
    setEmail(newemail);
  };

  const reset = () => {
    setFirst("");
    setLast("");
    setNumber("");
    setEmail("");
    setGender("");
    setEducation("");
    setError(false);
  };

  function isAlphabetic(str) {
    if (str.length === 0) return false;
    return !/^\d+$/.test(str);
  }

  function isValidEmailAddress(address) {
    return address.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g);
  }

  const test = () => {
    if (firstname === "") {
      return true;
    } else if (lastname === "") {
      return true;
    } else if (number === "" || number.length < 10) {
      return true;
    } else if (email === "" || !isValidEmailAddress(email)) {
      return true;
    } else if (gender === undefined) {
      return true;
    } else if (education === "") {
      return true;
    }
    return false;
  };

  const trynext = () => {
    const hasError = test();
    setError(hasError);
    if (!hasError) {
      userDetails.firstname = firstname;
      userDetails.lastname = lastname;
      userDetails.number = number;
      userDetails.email = email;
      userDetails.gender = gender;
      userDetails.education = education;
      next();
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="First Name"
            value={firstname}
            onChange={changeFirst}
            error={error && firstname === ""}
            helperText={
              error && firstname === "" ? "Please enter your first name" : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Last Name"
            value={lastname}
            onChange={changeLast}
            error={error && lastname === ""}
            helperText={
              error && lastname === "" ? "Please enter your last name" : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            value={number}
            onChange={changeNum}
            error={error && (number === "" || number.length < 10)}
            helperText={
              error && (number === "" || number.length < 10)
                ? "Please enter a valid phone number"
                : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            value={email}
            onChange={changeEmail}
            error={error && (email === "" || !isValidEmailAddress(email))}
            helperText={
              error && (email === "" || !isValidEmailAddress(email))
                ? "Please enter a valid email address"
                : ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            error={error && gender === undefined}
          >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={error && education === ""}>
            <InputLabel>Education</InputLabel>
            <Select
              value={education}
              onChange={(a) => setEducation(a.target.value)}
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              {educationlist.map((edu) => (
                <MenuItem key={edu.value} value={edu.value}>
                  {edu.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={trynext}>
                Next
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={reset}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDetails;
