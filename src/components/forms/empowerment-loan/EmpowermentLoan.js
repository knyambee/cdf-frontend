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
import CoatOFArms from "../../../images/coat-of-arms-zambia.png";
import EmpowerementLoanDetailForm from "./EmpowerementLoanDetailForm";
import EmpowerementLoanAttachments from "./EmpowerementLoanAttachments";
import EmpowerementLoanReview from "./EmpowerementLoanReview";

const steps = ["Main", "Attachments", "Review your application"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <EmpowerementLoanDetailForm />;
    case 1:
      return <EmpowerementLoanAttachments />;
    case 2:
      return <EmpowerementLoanReview />;
    default:
      throw new Error("Unknown step");
  }
};

const theme = createTheme();

const EmpowermentLoan = () => {
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
                 <img
            src={CoatOFArms}
            alt="Coat of arms"
        
          />
          <Typography component="h1" variant="h4" align="center">
          CONSTITUENCY DEVELOPMENT FUND (CDF) LOAN AGREEMENT FORM
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
                  Your application reference number is #2001539. We have emailed your application
                  confirmation, and will send you an update when your application has been completed.
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
                    {activeStep === steps.length - 1 ? "Submit application" : "Next"}
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

export default EmpowermentLoan;
