import { parseCookies } from 'nookies';

export async function createRule({ rule }) {
  const { jwt } = parseCookies();
  const req = await fetch(`http://localhost:1337/rules`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(rule),
  });
  const res = await req.json();
  return res;
}

export async function countRules() {
  const req = await fetch(`http://localhost:1337/rules/count`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}

export async function getRule({ id }) {
  const req = await fetch(`http://localhost:1337/rules/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}
