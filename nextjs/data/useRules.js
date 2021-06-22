import useSWR from 'swr';
import { getRules } from '../api/ruleApi';

export default function useRules() {
  const { data, mutate, error } = useSWR('/rules', getRules);

  const loading = !data && !error;

  return {
    loading,
    error,
    rules: data,
    mutateRules: mutate,
  };
}
