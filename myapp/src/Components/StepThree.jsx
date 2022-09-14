import React, { useContext } from 'react';
import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { multiStepContext } from '../Context/StepContext';

const StepThree = () => {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  const submitData = () => {
    setCurrentStep(3);
    console.log('finalData', userData);
  };
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Box>
        <Typography component="h1" variant="h5">
          How are you planning to use Eden?
        </Typography>
        <Typography component="p" variant="p">
          We'll streamline your setup experience accordingly.
        </Typography>
      </Box>
      <Box>
        <div>
          <Box border={'1px solid black'}></Box>
          <Box border={'1px solid black'}></Box>
        </div>
        <div>
          <Button onClick={submitData}>Create Workspace</Button>
        </div>
      </Box>
    </>
  );
};

export default StepThree;
