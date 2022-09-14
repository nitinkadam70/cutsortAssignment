import React, { useContext } from 'react';
import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { multiStepContext } from '../Context/StepContext';

const StepOne = () => {
  const { setCurrentStep, userData, setUserData } =
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
          Welcome! First thing first...
        </Typography>
        <Typography component="p" variant="p">
          You can always change them later.
        </Typography>
      </Box>
      <Box>
        <div>
          <InputLabel>Full Name</InputLabel>
          <TextField
            required
            name="fullName"
            onChange={handleChange}
            placeholder="steve Jobs"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <InputLabel>Display Name</InputLabel>
          <TextField
            required
            name="displayName"
            onChange={handleChange}
            placeholder="steve"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <Button onClick={() => setCurrentStep(1)}>
            Create Workspace
          </Button>
        </div>
      </Box>
    </>
  );
};

export default StepOne;
