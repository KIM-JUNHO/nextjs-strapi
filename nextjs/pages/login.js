import { useState } from 'react';
import { login } from '../requests/userApi';
import Router from 'next/router';
import useUser from '../data/useUser';

function Login() {
  const { mutateUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
    await mutateUser();
    Router.push('/profile');
  };

  return (
    <form onSubmit={onLoginSubmit}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
