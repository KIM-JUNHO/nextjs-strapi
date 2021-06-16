import { getUsers } from '../lib/api';

function Users({ users }) {
  return <div>{JSON.stringify(users)}</div>;
}

export async function getServerSideProps() {
  const users = await getUsers();
  return {
    props: { users },
  };
}

export default Users;
