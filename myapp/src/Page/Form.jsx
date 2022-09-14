import {
  Avatar,
  Icon,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useContext } from 'react';
import StepFour from '../Components/StepFour';
import StepOne from '../Components/StepOne';
import StepThree from '../Components/StepThree';
import StepTwo from '../Components/StepTwo';
import { multiStepContext } from '../Context/StepContext';

const Form = () => {
  const { userData, currentStep } = useContext(multiStepContext);

  const showSteps = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
    }
  };
  return (
    <>
      <Box>
        <Stepper activeStep={currentStep} alternativeLabel>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </Box>

      <Box>{showSteps(currentStep)}</Box>
    </>
  );
};

export default Form;
