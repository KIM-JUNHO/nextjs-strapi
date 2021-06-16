import { request } from 'graphql-request';
import * as gql from './gql';

const API_URL = process.env.STRAPI_URL || 'http://localhost:1337';

function fetcher(query) {
  return request(`${API_URL}/graphql`, query);
}

export async function getUsers() {
  return fetcher(gql.GET_USERS);
}
