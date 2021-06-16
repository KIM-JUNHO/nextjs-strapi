import { setCookie, destroyCookie } from 'nookies';
import { fetcher, fetchAuthenticated } from '../lib/fetcher';
import * as gql from './gql';

export async function login({ username, password }) {
  const data = await fetcher(gql.LOGIN, { variables: { username, password } });
  setCookie(null, 'jwt', data.login.jwt, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
  return data.login;
}

export function logout() {
  destroyCookie(null, 'jwt');
}

export async function me() {
  const data = await fetchAuthenticated(gql.ME);
  return data.me;
}
