const Request = ({ request: { id, user, created_at, expireDate, comment } }) => {
  return (
    <>
      <div>{id}</div>
      <div>{user.username}</div>
      <div>{created_at}</div>
      <div>{expireDate}</div>
      <div>{comment}</div>
    </>
  );
};

export default Request;
