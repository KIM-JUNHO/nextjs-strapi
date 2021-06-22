export async function getRules() {
  const req = await fetch(`http://localhost:1337/rules`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}

export async function createRule({ rule }) {
  const body = {
    user: '2',
    approver: '1',
    expireDate: '2022-06-21',
    comment: 'TEST5',
    rules: [rule],
  };
  const req = await fetch(`http://localhost:1337/rules`, {
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
