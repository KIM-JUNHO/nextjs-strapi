const API_URL = process.env.STRAPI_URL || 'http://localhost:1337';

const fetcher = (url) => fetch(API_URL + url).then((res) => res.json());

export async function getUsers() {
  return fetcher('/users');
}
