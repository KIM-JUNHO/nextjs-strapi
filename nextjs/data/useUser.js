import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useUser() {
  const { data, error, mutate } = useSWR(`/strapi/users/me`, fetchWithToken);

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
}
