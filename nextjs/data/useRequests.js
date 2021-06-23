import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useRequests({ pageSize, pageNum }) {
  const pageIndex = pageNum * pageSize;
  const { data, error, mutate } = useSWR(
    `http://localhost:1337/requests?_limit=${pageSize}&_start=${pageIndex}`,
    fetchWithToken
  );

  const loading = !data && !error;

  return {
    loading,
    error,
    requests: data,
    mutateRequests: mutate,
  };
}
