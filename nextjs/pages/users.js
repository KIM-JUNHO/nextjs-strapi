import useSWR from 'swr';
import { getUsers } from '../lib/api';

function Users() {
  const { data, error } = useSWR('/users', getUsers);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
}

export default Users;
