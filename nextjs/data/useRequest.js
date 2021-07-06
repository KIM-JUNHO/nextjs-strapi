import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useRequest({ id }) {
  const { data, error, mutate } = useSWR(`/strapi/requests${id}`, fetchWithToken);

  const loading = !data && !error;

  return {
    data,
    loading,
    error,
    mutate,
  };
}
