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
import SkillsTrainingBursaryDetailForm from "./SkillsTrainingBursaryDetailForm";
import SkillsTrainingBursaryAttachments from "./SkillsTrainingBursaryAttachments";
import SkillsTrainingBursaryReview from "./SkillsTrainingBursaryReview";
import CoatOfArms from "../../layout/CoatOfArms";
import {fields} from './skillsTrainingBursaryBlankForm';

const steps = ["Main", "Attachments", "Review your application"];
const blankForm = fields;

const theme = createTheme();

const SkillsTrainingBursary = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formFields, setFormFields] = React.useState(blankForm);

  const handleNext = (e) => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      console.log(`This is where I will post ${formFields} to the backend`)
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SkillsTrainingBursaryDetailForm formFields={formFields} setFormFields={setFormFields} />;
      case 1:
        return <SkillsTrainingBursaryAttachments formFields={formFields} setFormFields={setFormFields} />;
      case 2:
        return <SkillsTrainingBursaryReview formFields={formFields} />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <CoatOfArms />
          <Typography component="h1" variant="h4" align="center">
            CONSTITUENCY DEVELOPMENT FUND SKILLS DEVELOPMENT BURSARY APPLICATION
            FORM
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

export default SkillsTrainingBursary;
