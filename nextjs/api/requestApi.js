export async function getRequests() {
  const req = await fetch(`http://localhost:1337/requests`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}

export async function createRequest({ rule }) {
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
    },
    body: JSON.stringify(body),
  });
  const res = await req.json();
  return res;
}

export async function countRequests() {
  const req = await fetch(`http://localhost:1337/requests/count`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}

export async function getRequest({ id }) {
  const req = await fetch(`http://localhost:1337/requests/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}
