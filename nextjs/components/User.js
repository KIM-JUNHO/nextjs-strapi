const User = ({ user: { username, email, role, created_at } }) => {
  return (
    <>
      <div>{username}</div>
      <div>{email}</div>
      <div>{role.name}</div>
      <div>{created_at}</div>
    </>
  );
};

export default User;
