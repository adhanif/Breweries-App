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
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Brewery({ brewery }: BreweryProp) {
  return (
    <Grid container justifyContent='center'>
      <Box
        sx={{ minWidth: '18rem', backgroundColor: '#f2f2f2', padding: '1rem' }}
      >
        <Card
          variant='outlined'
          sx={{ minWidth: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
                R
              </Avatar>
            }

            // title='Shrimp and Chorizo Paella'
            // subheader='September 14, 2016'
          />
          <CardContent>
            {/* <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Word of the Day
            </Typography> */}
            <Typography variant='body1' style={{ fontWeight: 'bold' }}>
              {brewery.name}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              adjective
            </Typography>
            <Typography variant='body2'>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/Breweries/${brewery.id}`}>
              <Button size='small'>Learn More</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
