import React from 'react';

import { BreweryProp } from '../../misc/types';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { CustomizedButton } from '../customStyling/customStyling';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

export default function Brewery({ brewery }: BreweryProp) {
  // console.table(brewery);
  return (
    <Grid container justifyContent='center'>
      <Card
        variant='outlined'
        sx={{
          minWidth: '18rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
        }}
      >
        <CardContent>
          <Typography variant='body1' fontWeight='900' marginBottom={2}>
            {brewery.name}
          </Typography>

          <Stack marginBottom={2} spacing={0.5}>
            <Stack direction='row' alignItems=' center' spacing={1}>
              <LocationOnIcon fontSize='small' />

              {brewery.address_1 !== null ? (
                <Typography variant='caption'>{brewery.address_1}</Typography>
              ) : (
                <Typography variant='caption'>Unnamed Street</Typography>
              )}
            </Stack>
            <Stack direction='row' alignItems='center' spacing={1}>
              <LanguageIcon fontSize='small' />
              {brewery.website_url !== null ? (
                <Typography variant='caption' fontWeight='700'>
                  {brewery.website_url}
                </Typography>
              ) : (
                <Typography variant='caption' fontWeight='700'>
                  website is unavailable!
                </Typography>
              )}
            </Stack>
          </Stack>
          <Grid textAlign='center'>
            <Typography
              variant='overline'
              fontWeight='700'
              sx={{
                backgroundColor: '#D8D8D8',
                padding: '5px 40px',
                borderRadius: '3px',
              }}
            >
              {brewery.brewery_type}
            </Typography>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid display='flex' alignItems='center' justifyContent='center'>
            <Link to={`/Breweries/${brewery.id}`}>
              <CustomizedButton variant='contained' endIcon={<SendIcon />}>
                More Detail
              </CustomizedButton>
            </Link>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}