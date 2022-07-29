import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function SkillsTrainingBursaryAttachments() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Supporting Documents
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="nrc"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            type="file"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="disabilityCard"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            type="file"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="recommendationLetter"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            type="file"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="certificates"
            helperText="A full Grade 12 School Certificate or GCE five (5), O-levels or equivalent or Grade 9 or 7 Certificates. "
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            type="file"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}