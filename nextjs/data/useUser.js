import useSWR from 'swr';
import { me } from '../requests/userApi';

export default function useUser() {
  const { data: user, mutate: mutateUser, error } = useSWR('/users/me', me);

  const loading = !user && !error;
  const loggedOut = error;

  return {
    loading,
    loggedOut,
    user,
    mutateUser,
  };
}
