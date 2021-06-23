import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useApprovals() {
  const { data, mutate, error } = useSWR(`http://localhost:1337/approvals`, fetchWithToken);

  const loading = !data && !error;

  return {
    loading,
    error,
    approvals: data,
    mutateApprovals: mutate,
  };
}
