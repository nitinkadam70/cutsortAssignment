import React, { useContext } from 'react';
import {
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
    <div className="steps">
      <div className="steps">
        <Typography component="h1" variant="h5">
          Let's set up a home for all your work...
        </Typography>
        <br />
        <Typography color={'#808A9F'} component="p" variant="p">
          You can always create another workspace leter.
        </Typography>
      </div>
      <br />
      <div className="Input">
        <div>
          <InputLabel>Workspace Name</InputLabel>
          <TextField
            className="IW"
            name="workspaceName"
            onChange={handleChange}
            placeholder="Eden"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <br />
        <div>
          <InputLabel>
            Workspace URL <span>(optional)</span>
          </InputLabel>
          <TextField
            className="IW"
            name="workspaceURL"
            onChange={handleChange}
            placeholder="Example"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <br />
        <div>
          <Button onClick={() => setCurrentStep(2)}>
            Create Workspace
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
