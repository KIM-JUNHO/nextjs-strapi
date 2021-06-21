import Router from 'next/router';
import { destroyCookie, parseCookies } from 'nookies';

export async function login({ username, password }) {
  const req = await fetch(`http://localhost:1337/auth/local`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier: username, password }),
  });

  const res = await req.json();
  return res;
}

export function logout() {
  destroyCookie(null, 'jwt');
  Router.push('/login');
}

export async function me() {
  const { jwt } = parseCookies();
  const req = await fetch(`http://localhost:1337/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });

  const res = await req.json();
  if (res.error) {
    console.error(res.error);
    throw new Error('Failed to fetch API');
  }

  return res;
}
