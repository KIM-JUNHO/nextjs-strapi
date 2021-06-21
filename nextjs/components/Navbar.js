import Router from 'next/router';
import { useEffect } from 'react';
import useUser from '../data/useUser';
import { logout } from '../requests/userApi';
import Link from 'next/link';

const Navbar = () => {
  const { user, loading, error } = useUser();

  useEffect(() => {
    if (error) {
      Router.replace('/login');
    }
  }, [error]);

  if (loading) return 'loading...';
  if (error) return 'redirecting...';

  return (
    <div>
      <div>
        <Link href="/requests/create">create</Link>
      </div>
      <div>
        <Link href="/requests">get</Link>
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
