import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function usePending({ username, pageSize, pageNum }) {
  const pageIndex = pageNum * pageSize;
  const { data, error, mutate } = useSWR(
    `/strapi/requests?_limit=${pageSize}&_start=${pageIndex}&status_ne=POSTPONED&approvals.status=PENDING&approvals.user.username=${username}`,
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
