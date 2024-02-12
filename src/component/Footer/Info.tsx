import React from 'react';
import { Typography, Stack } from '@mui/material';

const Info = () => {
  return (
    <Stack>
      <Typography
        variant='h6'
        noWrap
        sx={{
          color: 'white',
        }}
      >
        Contact
      </Typography>

      <Typography
        sx={{
          color: 'white',
        }}
        variant='caption'
      >
        Breweries DB Oy
      </Typography>

      <Typography
        sx={{
          color: 'white',
          lineHeight: '1',
        }}
        variant='caption'
      >
        Helsinki
      </Typography>

      <Typography
        sx={{
          color: 'white',
          marginTop: '10px',
        }}
        variant='caption'
      >
        (358) 981 981 981
      </Typography>

      <Typography
        sx={{
          color: 'white',
          lineHeight: '1',
        }}
        variant='caption'
      >
        hello@breweries.com
      </Typography>
    </Stack>
  );
};

export default Info;
