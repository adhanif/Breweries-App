import React from 'react';
import {
  Typography,
  Stack,
  TextField,
  Button,
  Input,
  Grid,
} from '@mui/material';
import { CustomizedButtonMedium } from '../CustomStyling/customStyling';

const Subscribe = () => {
  return (
    <>
      <Grid>
        <TextField
          variant='outlined'
          // label='Email'
          size='small'
          color='error'
          sx={{ bgcolor: 'white', borderRadius: '4px', color: 'white' }}
        />
        <CustomizedButtonMedium variant='contained'>
          Subscribe
        </CustomizedButtonMedium>
      </Grid>

      <Grid>
        <Typography
          variant='body2'
          sx={{
            color: 'white',
            marginTop: '3rem',
          }}
        >
          {' '}
          Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
        </Typography>
      </Grid>
    </>
  );
};

export default Subscribe;
