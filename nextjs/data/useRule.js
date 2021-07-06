import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useRule({ id }) {
  const { data, error, mutate } = useSWR(`/strapi/rules/${id}`, fetchWithToken);

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
}
