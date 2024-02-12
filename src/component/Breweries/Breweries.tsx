import React, { useMemo, useState } from 'react';
import { useFetch } from '../../hook/useFetch';
import { Container, Grid, Typography, Pagination, Box } from '@mui/material';

import Loading from '../loading/Loading';
import Brewery from '../Brewery/Brewery';
import { BreweryType } from '../../misc/types';

export default function Breweries() {
  const url = 'https://api.openbrewerydb.org/v1/breweries';

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useFetch<BreweryType>(`${url}`);

  const memoizedBreweries = useMemo(() => {
    return data || [];
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedBreweries = memoizedBreweries.slice(startIndex, endIndex);
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
      <Grid container columnSpacing={5} rowSpacing={5} marginBottom={10}>
        {displayedBreweries &&
          displayedBreweries.map((brewery) => {
            return (
              <Grid item key={brewery.id} xs={12} sm={6} md={4} lg={4}>
                <Brewery brewery={brewery} />
              </Grid>
            );
          })}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }} marginBottom={30}>
        <Pagination
          count={Math.ceil(memoizedBreweries.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
}
