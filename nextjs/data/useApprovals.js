import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useApprovals({ pageSize, pageNum }) {
  const pageIndex = pageNum * pageSize;
  const { data, error, mutate } = useSWR(
    `http://localhost:1337/approvals?_limit=${pageSize}&_start=${pageIndex}`,
    fetchWithToken
  );

  const loading = !data && !error;

  return {
    loading,
    error,
    approvals: data,
    mutateApprovals: mutate,
  };
}
