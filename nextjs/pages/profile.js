import Router from 'next/router';
import { destroyCookie } from 'nookies';
import { useEffect } from 'react';
import useUser from '../data/useUser';

function Profile() {
  const { user, mutateUser, loading, loggedOut } = useUser();

  useEffect(() => {
    if (loggedOut) {
      Router.replace('/login');
    }
  }, [loggedOut]);

  if (loggedOut) return 'redirecting...';
  if (loading) return 'loading...';

  const logout = () => {
    destroyCookie(null, 'jwt');
    mutateUser();
    Router.push('/login');
  };

  return (
    <div>
      <div>{user.email}</div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Profile;
