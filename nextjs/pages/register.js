import { useState } from 'react';
import { register } from '../requests/userApi';
import Router from 'next/router';
import useUser from '../data/useUser';
import { setCookie } from 'nookies';
import Link from 'next/link';

function RegisterPage() {
  const { mutateUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    const res = await register({ username, password, email });
    await setCookie(null, 'jwt', res.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    await mutateUser();
    Router.push('/profile');
  };

  return (
    <form onSubmit={onRegisterSubmit}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <button type="submit">Register</button>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </form>
  );
}

export default RegisterPage;
