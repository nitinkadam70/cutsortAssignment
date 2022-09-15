import React, { useContext } from 'react';
import {
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
    <div className="steps">
      <div>
        <Typography component="h1" variant="h5">
          How are you planning to use Eden?
        </Typography>
        <br />
        <Typography color={'#808A9F'} component="p" variant="p">
          We'll streamline your setup experience accordingly.
        </Typography>
      </div>
      <br />
      <div>
        <div>
          <input
            name="workplace"
            onChange={handleChange}
            type="radio"
            placeholder="For myself"
            value={'For myself'}
          />
          <span>For myself</span>
        </div>
        <br />
        <div>
          <input
            name="workplace"
            onChange={handleChange}
            type="radio"
            placeholder="With my team"
          />
          <span>With my team</span>
        </div>
        <br />

        <div>
          <Button onClick={submitData}>Create Workspace</Button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
