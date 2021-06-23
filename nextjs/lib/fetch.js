import { parseCookies } from 'nookies';

export async function fetchWithToken(...args) {
  const { jwt } = parseCookies();
  const res = await fetch(...args, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return res.json();
}
