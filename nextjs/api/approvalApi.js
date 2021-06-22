export async function getApprovals() {
  const req = await fetch(`http://localhost:1337/approvals`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}

export async function createApproval({ rule }) {
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
    },
    body: JSON.stringify(body),
  });
  const res = await req.json();
  return res;
}

export async function countApprovals() {
  const req = await fetch(`http://localhost:1337/approvals/count`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}

export async function getApproval({ id }) {
  const req = await fetch(`http://localhost:1337/approvals/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}
