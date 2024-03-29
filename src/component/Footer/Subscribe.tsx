import React from 'react';
import { Typography, TextField, Grid } from '@mui/material';

import { CustomizedButtonMedium } from '../CustomStyling/CustomeStyling2';

const Subscribe = () => {
  return (
    <>
      <Grid>
        <TextField
          variant='outlined'
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
