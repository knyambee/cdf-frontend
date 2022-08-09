import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function SecondaryBoardingBursaryDetailForm({ formFields, setFormFields }) {

  const handleOnChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        WITH FREE EDUCATION ? MAY NOT BE NEEDED ...
      </Typography>

    </React.Fragment>
  );
}
