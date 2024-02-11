import React from 'react';
import { useFetch } from '../../hook/useFetch';
import { BreweryType } from '../../misc/types';
import Brewery from '../Brewery/Brewery';
import { Container, Grid, Typography } from '@mui/material';
import Loading from '../loading/Loading';

export default function Breweries() {
  const url = 'https://api.openbrewerydb.org/v1/breweries';
  //   const url = 'https://fakestoreapi.com/users';

  const { data, loading, error } = useFetch<BreweryType>(url);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Typography
        fontWeight={1000}
        variant='h3'
        sx={{
          textTransform: 'uppercase',
          color: '#e68700',
          textAlign: 'center',
        }}
        mb={10}
      >
        AFFILIATED BREWERIES
      </Typography>
      <Grid container columnSpacing={5} rowSpacing={5} marginBottom={30}>
        {data &&
          data.map((brewery) => {
            return (
              <Grid item key={brewery.id} xs={12} sm={6} md={4} lg={4}>
                <Brewery brewery={brewery} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
