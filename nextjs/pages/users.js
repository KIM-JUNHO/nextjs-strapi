import useUsers from '../lib/useUsers';

function Users() {
  const { users, isLoading, isError } = useUsers();

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return <div>{JSON.stringify(users)}</div>;
}

export default Users;
