import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function usePostponed({ username, pageSize, pageNum }) {
  const pageIndex = pageNum * pageSize;
  const { data, error, mutate } = useSWR(
    `/strapi/requests?_limit=${pageSize}&_start=${pageIndex}&status=POSTPONED`,
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
