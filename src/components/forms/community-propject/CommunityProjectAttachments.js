import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CommunityProjectAttachments({
  formFields,
  setFormFields,
}) {
  const handleOnChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Supporting Documents
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="documents"
            fullWidth
            variant="standard"
            type="file"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
