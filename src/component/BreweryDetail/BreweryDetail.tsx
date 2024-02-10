import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hook/useFetch';
import { BreweryType } from '../../misc/types';
import Loading from '../loading/Loading';

export default function BreweryDetail() {
  const breweryId = useParams();

  const url = `https://api.openbrewerydb.org/v1/breweries/${breweryId.id}`;
  //   console.log(url);

  const { data, loading, error } = useFetch<BreweryType>(url);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);
  return <div>BreweryDetail</div>;
}
