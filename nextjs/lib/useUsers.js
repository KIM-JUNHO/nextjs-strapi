import useSWR from 'swr';
import { getUsers } from './api';

const useUsers = () => {
  const { data, error } = useSWR(`/users`, getUsers);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUsers;
