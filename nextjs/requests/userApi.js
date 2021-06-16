import { fetcher } from '../lib/fetcher';
import * as gql from './gql';

export async function login({ username, password }) {
  const data = await fetcher(gql.LOGIN, { variables: { username, password } });
  return data.login;
}
