import Router from 'next/router';
import { useEffect } from 'react';
import useUser from '../data/useUser';
import { logout } from '../requests/userApi';
import Link from 'next/link';

const Navbar = () => {
  const { user, loading, loggedOut } = useUser();

  useEffect(() => {
    if (loggedOut) {
      Router.replace('/login');
    }
  }, [loggedOut]);

  if (loading) return 'loading...';
  if (loggedOut) return 'redirecting...';

  return (
    <div>
      <div>
        <Link href="/requestRule">RequestRule</Link>
      </div>
      <div>
        <Link href="/profile">Profile</Link>
      </div>
      <div>
        <Link href="/ruleRequests">RuleRequests</Link>
      </div>
      <div>
        <Link href="/login">Login</Link>
      </div>
      <div>username : {user.username}</div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Navbar;
