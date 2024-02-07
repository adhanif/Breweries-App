import React from 'react';
import { useFetch } from '../../hook/useFetch';
import { CompanyType } from '../../misc/types';
import CompanyComponent from '../company/CompanyComponent';
import { dividerClasses } from '@mui/material';

export default function Companies() {
  const url = 'https://api.openbrewerydb.org/v1/breweries';

  const { data, loading, error } = useFetch<CompanyType>(url);

  //   console.log(data);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {data && (
        <div>
          {data.map((company) =>
            //  <div key={company.id}>{company.name}</div>;
            {
              return (
                <div key={company.id}>
                  <CompanyComponent company={company} />
                </div>
              );
            },
          )}
        </div>
      )}
    </div>
  );
}
