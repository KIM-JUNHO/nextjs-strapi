import { parseCookies } from 'nookies';

export async function getRequests() {
  const { jwt } = parseCookies();
  const req = await fetch(`http://localhost:1337/requests`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
  const res = await req.json();
  return res;
}

export async function createRequest({ rule }) {
  const { jwt } = parseCookies();
  const body = {
    user: '2',
    approver: '1',
    expireDate: '2022-06-21',
    comment: 'TEST5',
    rules: [rule],
  };
  const req = await fetch(`http://localhost:1337/requests`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(body),
  });
  const res = await req.json();
  return res;
}

export async function countRequests() {
  const { jwt } = parseCookies();
  const req = await fetch(`http://localhost:1337/requests/count`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
  const res = await req.json();
  return res;
}

export async function getRequest({ id }) {
  const { jwt } = parseCookies();
  const req = await fetch(`http://localhost:1337/requests/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
  const res = await req.json();
  return res;
}
