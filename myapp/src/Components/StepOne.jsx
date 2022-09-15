import React, { useContext } from 'react';
import {
  Button,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { multiStepContext } from '../Context/StepContext';
import { useState } from 'react';

const StepOne = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  const [fullName, setFullName] = useState('');
  const [dName, setDName] = useState('');

  const goNext = () => {
    if (fullName.length > 1 && dName.length > 1) {
      setUserData({
        ...userData,
        fullName,
        dName,
      });
      setCurrentStep(1);
    } else {
      alert('Please filled Inputs');
    }
  };

  return (
    <div className="steps">
      <div>
        <Typography component="h1" variant="h5">
          Welcome! First thing first...
        </Typography>
        <br />
        <Typography color={'#808A9F'} component="p" variant="p">
          You can always change them later.
        </Typography>
      </div>
      <br />
      <div className="Input">
        <div>
          <InputLabel>Full Name</InputLabel>
          <TextField
            className="IW"
            required
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="steve Jobs"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <br />
        <div>
          <InputLabel>Display Name</InputLabel>
          <TextField
            className="IW"
            required
            name="displayName"
            onChange={(e) => setDName(e.target.value)}
            placeholder="steve"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <br />
        <div>
          <Button onClick={goNext}>Create Workspace</Button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
