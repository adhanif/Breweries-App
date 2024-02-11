import React from 'react';

import { Box, Grid } from '@mui/material';
import Subscribe from './Subscribe';
import Info from './Info';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: '20rem',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Grid
        container
        maxWidth='2xl'
        spacing={{ xs: 5, lg: 0 }}
        sx={{
          bgcolor: '#ff9424',
          minHeight: '10rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
          padding: '0px 80px',
        }}
      >
        <Grid item marginTop={{ xs: 5, sm: 0 }} padding={{ sm: 0 }}>
          <Info />
        </Grid>
        <Grid item>
          <Subscribe />
        </Grid>
        <Grid item marginBottom={{ xs: 5, sm: 0 }}>
          <SocialMediaIcons />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
