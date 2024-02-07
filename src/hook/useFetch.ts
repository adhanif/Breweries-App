import React, { useEffect, useState } from 'react';

import axios from 'axios';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
        setLoading(true);
      });
  }, [url]);

  return { data, loading, error };
}
