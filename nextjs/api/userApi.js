export async function login({ username, password }) {
  const req = await fetch(`http://localhost:1337/auth/local`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier: username, password }),
  });

  const res = await req.json();
  return res;
}

export async function register({ username, password, email }) {
  const req = await fetch(`http://localhost:1337/auth/local/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, email }),
  });

  const res = await req.json();
  return res;
}
