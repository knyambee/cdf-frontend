import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CommunityProjectDetailForm from "./CommunityProjectDetailForm";
import CommunityProjectAttachments from "./CommunityProjectAttachments";
import CommunityProjectReview from "./CommunityProjectReview";
import CoatOFArms from "../../../images/coat-of-arms-zambia.png";

const steps = ["Main", "Attachments", "Review your application"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CommunityProjectDetailForm />;
    case 1:
      return <CommunityProjectAttachments />;
    case 2:
      return <CommunityProjectReview />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

const CommunityProject = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <img src={CoatOFArms} alt="Coat of arms" align="center" />

          <Typography component="h1" variant="h4" align="center">
            CONSTITUENCY DEVELOPMENT FUND (CDF) APPLICATION FORM FOR COMMUNITY
            PROJECTS
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your application.
                </Typography>
                <Typography variant="subtitle1">
                  Your application reference number is #2001539. We have emailed
                  your application confirmation, and will send you an update
                  when your application has been completed.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? "Submit application"
                      : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default CommunityProject;
