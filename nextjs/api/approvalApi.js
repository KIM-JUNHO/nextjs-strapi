import { parseCookies } from 'nookies';

export async function createApproval({ approval }) {
  const { jwt } = parseCookies();
  const req = await fetch(`http://localhost:1337/approvals`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(approval),
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
