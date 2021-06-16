function Users({ users }) {
  return <div>{JSON.stringify(users)}</div>;
}

export async function getServerSideProps() {
  const users = await fetch('http://localhost:1337/users').then((res) => res.json());
  return {
    props: { users },
  };
}

export default Users;
