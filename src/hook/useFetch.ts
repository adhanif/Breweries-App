import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then((res: AxiosResponse<T[]>) => {
        setData(res.data);
        setLoading(false);
        setError('');
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
