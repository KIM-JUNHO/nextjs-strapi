import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useApproval({ id }) {
  const { data, error, mutate } = useSWR(`/strapi/approvals/${id}`, fetchWithToken);

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
}
