import useSWR from 'swr';
import { getRequests } from '../api/requestApi';

export default function useRequests() {
  const { data, mutate, error } = useSWR('/requests', getRequests);

  const loading = !data && !error;

  return {
    loading,
    error,
    requests: data,
    mutateRequests: mutate,
  };
}
