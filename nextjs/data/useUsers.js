import useSWR from 'swr';
import { fetcher } from '../lib/fetch';

export default function useUsers() {
  const { data, error, mutate } = useSWR('http://localhost:1337/users', fetcher);

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
}
