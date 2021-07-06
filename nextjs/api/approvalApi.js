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
