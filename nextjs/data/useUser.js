import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useUser() {
  const { data, error, mutate } = useSWR(`http://localhost:1337/users/me`, fetchWithToken);

  const loading = !data && !error;

  return {
    loading,
    error,
    user: data,
    mutateUser: mutate,
  };
}
