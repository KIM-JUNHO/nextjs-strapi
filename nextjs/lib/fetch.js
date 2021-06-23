import { parseCookies } from 'nookies';

export async function fetchWithToken(...args) {
  const { jwt } = parseCookies();
  const req = await fetch(...args, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const res = await req.json();
  if (res.error) {
    console.error(res.error);
    throw new Error('Failed to fetch API');
  }
  return res;
}
