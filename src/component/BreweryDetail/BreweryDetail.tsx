import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hook/useFetch';
import { BreweryType } from '../../misc/types';
import Loading from '../loading/Loading';
import {
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';

import MapDetail from '../Map/MapDetail';
import { CustomizedButtonMedium } from '../CustomStyling/CustomeStyling2';

export default function BreweryDetail() {
  const breweryId = useParams();
  const navigate = useNavigate();

  const url = `https://api.openbrewerydb.org/v1/breweries?by_ids=${breweryId.id}`;
  const { data, loading, error } = useFetch<BreweryType>(url);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth='md'>
      <Grid container justifyContent={'center'}>
        <Grid item>
          <Card
            style={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              margin: '20px',
              borderRadius: '8px',
              padding: '5px',
            }}
          >
            <CardContent>
              <Typography
                variant='h6'
                gutterBottom
                fontWeight={700}
                sx={{
                  textTransform: 'uppercase',
                  color: '#e68700',
                  textAlign: 'center',
                }}
                marginBottom={5}
              >
                {data[0].name}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant='body1'>
                    <strong>Brewery Type:</strong> {data[0].brewery_type}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='body1'>
                    <strong>Address: </strong>
                    {data[0].city}, {data[0].state_province},{' '}
                    {data[0].postal_code}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='body1'>
                    <strong>Headquarter: </strong>
                    {data[0].city}, {data[0].country}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='body1'>
                    <strong>Phone:</strong> {data[0].phone}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant='body1'>
                    <strong>Website:</strong>{' '}
                    <Link
                      href={data[0].website_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#1976D2', textDecoration: 'none' }}
                    >
                      {data[0].website_url}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item padding={5}>
        <MapDetail
          center={[Number(data[0].latitude), Number(data[0].longitude)]}
          zoom={13}
          name={data[0].name}
        />
      </Grid>
      <Grid container justifyContent={'center'}>
        <CustomizedButtonMedium
          variant='contained'
          type='submit'
          onClick={handleClick}
        >
          Back
        </CustomizedButtonMedium>
      </Grid>
    </Container>
  );
}
