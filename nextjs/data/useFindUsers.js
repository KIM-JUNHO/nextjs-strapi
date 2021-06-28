import useSWR from 'swr';
import { fetcher } from '../lib/fetch';

export default function useFindUsers({ username }) {
  const { data, error, mutate } = useSWR(
    `http://localhost:1337/users?username_contains=${username}`,
    fetcher
  );

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
}
