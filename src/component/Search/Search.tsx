import {
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import React, { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomizedButtonMedium } from '../CustomStyling/CustomeButton2';
import { BreweryType } from '../../misc/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Brewery from '../Brewery/Brewery';

type Inputs = {
  searchQuery: string;
  exampleRequired: string;
};

export default function Search() {
  const [data, setData] = useState<BreweryType[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const url = `https://api.openbrewerydb.org/v1/breweries?by_name=${data.searchQuery}`;

    axios
      .get(url)
      .then((res: AxiosResponse<BreweryType[]>) => {
        setData(res.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Container maxWidth='md' sx={{ marginBottom: '12rem' }}>
        <Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              direction='row'
              justifyContent='center'
              alignItems='center'
              marginX={5}
            >
              <TextField
                {...register('searchQuery', {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                size='small'
                variant='outlined'
                label='Search Brewery by name'
                color='warning'
                fullWidth
              />

              {errors.exampleRequired && <span>This field is required</span>}
              <CustomizedButtonMedium variant='contained' type='submit'>
                search
              </CustomizedButtonMedium>
            </Stack>
            <Stack marginX={5}>
              {errors?.searchQuery?.type === 'pattern' && (
                <Typography
                  variant='caption'
                  sx={{ color: 'red' }}
                  marginTop={1}
                >
                  **Alphabetical characters only
                </Typography>
              )}
            </Stack>
          </form>
        </Grid>
      </Container>
      <Container fixed>
        <Grid container columnSpacing={15} rowSpacing={5}>
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
    </>
  );
}
