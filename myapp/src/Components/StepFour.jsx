import React from 'react';
import {
  Box,
  Button,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';

const StepFour = () => {
  return (
    <Box>
      <div>
        <Typography component="h1" variant="h5">
          Congratulations, Eren!
        </Typography>
        <Typography component="p" variant="p">
          You have completed onboarding, you can start using the Eden!
        </Typography>
      </div>
      <div>
        <Button>Lauch Eden</Button>
      </div>
    </Box>
  );
};

export default StepFour;
