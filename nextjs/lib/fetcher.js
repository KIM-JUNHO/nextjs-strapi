import { parseCookies } from 'nookies';

export async function fetcher(query, { variables } = {}) {
  const endpoint = `${process.env.API_URL || 'http://localhost:1337'}/graphql`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };
  const res = await fetch(endpoint, options);

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function fetchAuthenticated(query, { variables } = {}) {
  const { jwt } = parseCookies();
  const endpoint = `${process.env.API_URL || 'http://localhost:1337'}/graphql`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };
  const res = await fetch(endpoint, options);

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}
