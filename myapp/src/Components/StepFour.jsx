import React from 'react';
import right from '../Image/right.png';

import { Button, Typography } from '@mui/material';

const StepFour = () => {
  return (
    <div className="steps">
      <center>
        <img src={right} alt="" />
      </center>
      <div>
        <Typography component="h1" variant="h5">
          Congratulations, Eren!
        </Typography>
        <br />
        <Typography color={'#808A9F'} component="p" variant="p">
          You have completed onboarding, you can start using the Eden!
        </Typography>
      </div>
      <br />
      <div>
        <Button>Lauch Eden</Button>
      </div>
    </div>
  );
};

export default StepFour;
