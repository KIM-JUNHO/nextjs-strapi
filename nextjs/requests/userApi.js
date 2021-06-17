import Router from 'next/router';
import { destroyCookie } from 'nookies';
import { fetcher, fetchAuthenticated } from '../lib/fetcher';
import * as gql from './gql';

export async function login({ username, password }) {
  const data = await fetcher(gql.LOGIN, { variables: { username, password } });
  return data.login;
}

export function logout() {
  destroyCookie(null, 'jwt');
  Router.push('/login');
}

export async function me() {
  const data = await fetchAuthenticated(gql.ME);
  return data.me;
}
