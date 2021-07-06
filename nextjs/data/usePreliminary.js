import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function usePreliminary({ username, pageSize, pageNum }) {
  const pageIndex = pageNum * pageSize;
  const { data, error, mutate } = useSWR(
    `/strapi/requests?_limit=${pageSize}&_start=${pageIndex}&status_ne=POSTPONED&approvals.status=PRELIMINARY&approvals.user.username=${username}`,
    fetchWithToken
  );

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
}
