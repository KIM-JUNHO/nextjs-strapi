import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useRules({ pageSize, pageNum }) {
  const pageIndex = pageNum * pageSize;
  const { data, error, mutate } = useSWR(
    `/strapi/rules?_limit=${pageSize}&_start=${pageIndex}`,
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
