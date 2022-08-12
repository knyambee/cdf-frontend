import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Features = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            FEATURES IN THIS (CDF) APP
          </Typography>
            <React.Fragment>
            <Typography variant="subtitle">
                Thank you for your application.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Thank you for your application.
              </Typography>
            </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Features;
