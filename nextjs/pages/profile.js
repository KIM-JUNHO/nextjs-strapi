import Router from 'next/router';
import { useEffect } from 'react';
import useUser from '../data/useUser';
import { logout } from '../requests/userApi';

function Profile() {
  const { user, mutateUser, loading, loggedOut } = useUser();

  useEffect(() => {
    if (loggedOut) {
      Router.replace('/login');
    }
  }, [loggedOut]);

  if (loggedOut) return 'redirecting...';
  if (loading) return 'loading...';

  return (
    <div>
      <div>{user.email}</div>
      <button
        onClick={() => {
          logout();
          mutateUser();
          Router.push('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
