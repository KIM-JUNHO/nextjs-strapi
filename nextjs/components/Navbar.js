import Router from 'next/router';
import { useEffect } from 'react';
import useUser from '../data/useUser';
import { logout } from '../requests/userApi';

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
      <>username : {user.username}</>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Navbar;
