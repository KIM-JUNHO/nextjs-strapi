import Router from 'next/router';
import { useEffect } from 'react';
import useUser from '../data/useUser';
import Link from 'next/link';
import { destroyCookie } from 'nookies';

const Navbar = () => {
  const { user, loading, error } = useUser();

  useEffect(() => {
    if (error) {
      Router.replace('/login');
    }
  }, [error]);

  if (loading) return 'loading...';
  if (error) return 'redirecting...';

  const logout = () => {
    destroyCookie(null, 'jwt');
    Router.push('/login');
  };

  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/requests/create">Create</Link>
      </div>
      <div>
        <Link href="/requests">List</Link>
      </div>
      <div>
        <Link href="/profile">Profile</Link>
      </div>
      <div>username : {user.username}</div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Navbar;
