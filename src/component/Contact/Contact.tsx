import React from 'react';

import {
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CustomizedButtonMedium } from '../CustomStyling/CustomStyling';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    // console.log(data);
    e?.target.reset();
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: '10rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5' marginBottom={5}>
          Contact US
        </Typography>
        {errors?.name?.type === 'pattern' && (
          <Typography variant='caption' sx={{ color: 'red' }} marginTop={1}>
            **Alphabetical characters only
          </Typography>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin='normal'
            fullWidth
            label='Name'
            {...register('name', {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z\s]+$/i,
            })}
          />
          {errors.email && (
            <Typography
              variant='caption'
              sx={{ color: 'red' }}
              marginTop={1}
              role='alert'
            >
              {errors.email.message}
            </Typography>
          )}
          <TextField
            label='Email Address'
            margin='normal'
            fullWidth
            {...register('email', {
              required: 'Email Address is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />

          {errors.message && (
            <Typography
              variant='caption'
              sx={{ color: 'red' }}
              marginTop={1}
              role='alert'
            >
              {errors.message.message}
            </Typography>
          )}
          <TextField
            margin='normal'
            label='Message'
            fullWidth
            multiline
            rows={7}
            variant='outlined'
            {...register('message', {
              required: 'Message is required',
              maxLength: 200,
            })}
          />

          <CustomizedButtonMedium
            variant='contained'
            type='submit'
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </CustomizedButtonMedium>
        </form>
      </Box>
    </Container>
  );
}
