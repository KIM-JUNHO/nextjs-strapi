import useSWR from 'swr';
import { fetchWithToken } from '../lib/fetch';

export default function useRules() {
  const { data, error, mutate } = useSWR(`http://localhost:1337/rules?_limit=5`, fetchWithToken);

  const loading = !data && !error;

  return {
    loading,
    error,
    rules: data,
    mutateRules: mutate,
  };
}
