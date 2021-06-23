import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useRequests() {
  const { data, mutate, error } = useSWR(`http://localhost:1337/requests`, fetchWithToken);

  const loading = !data && !error;

  return {
    loading,
    error,
    requests: data,
    mutateRequests: mutate,
  };
}
