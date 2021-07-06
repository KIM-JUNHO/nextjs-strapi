import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useUsers({ searhInput }) {
  const { data, error, mutate } = useSWR(
    `/strapi/users?_where[_or][0][username_contains]=${searhInput}&_where[_or][1][name_contains]=${searhInput}`,
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
