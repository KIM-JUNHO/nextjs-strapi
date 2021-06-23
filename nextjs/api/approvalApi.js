import { parseCookies } from 'nookies';

export async function createApproval({ rule }) {
  const { jwt } = parseCookies();
  const body = {
    user: '2',
    approver: '1',
    expireDate: '2022-06-21',
    comment: 'TEST5',
    rules: [rule],
  };
  const req = await fetch(`http://localhost:1337/approvals`, {
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

export async function countApprovals() {
  const { jwt } = parseCookies();
  const req = await fetch(`http://localhost:1337/approvals/count`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
  const res = await req.json();
  return res;
}

export async function getApproval({ id }) {
  const { jwt } = parseCookies();
  const req = await fetch(`http://localhost:1337/approvals/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
  const res = await req.json();
  return res;
}
