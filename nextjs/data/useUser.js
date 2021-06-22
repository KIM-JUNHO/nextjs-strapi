import useSWR from 'swr';
import { me } from '../api/userApi';

export default function useUser() {
  const { data, mutate, error } = useSWR('/users/me', me);

  const loading = !data && !error;

  return {
    loading,
    error,
    user: data,
    mutateUser: mutate,
  };
}
