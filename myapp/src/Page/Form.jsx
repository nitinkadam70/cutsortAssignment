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
import logo from '../Image/logo.png';
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
    <div className="main-container">
      <center>
        <img src={logo} alt="" />
      </center>
      <br />
      <div>
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
      </div>
      <br />
      <br />
      <div>{showSteps(currentStep)}</div>
    </div>
  );
};

export default Form;
