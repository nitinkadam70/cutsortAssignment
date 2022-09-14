import React, { useContext } from 'react';
import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { multiStepContext } from '../Context/StepContext';

const StepTwo = () => {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

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
          Let's set up a home for all your work...
        </Typography>
        <Typography component="p" variant="p">
          You can always create another workspace leter.
        </Typography>
      </Box>
      <Box>
        <div>
          <InputLabel>Workspace Name</InputLabel>
          <TextField
            name="workspaceName"
            onChange={handleChange}
            placeholder="Eden"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <InputLabel>
            Workspace URL <span>(optional)</span>
          </InputLabel>
          <TextField
            name="workspaceURL"
            onChange={handleChange}
            placeholder="Example"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <Button onClick={() => setCurrentStep(2)}>
            Create Workspace
          </Button>
        </div>
      </Box>
    </>
  );
};

export default StepTwo;
