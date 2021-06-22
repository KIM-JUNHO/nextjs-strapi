import Router from 'next/router';
import { useEffect } from 'react';
import useUser from '../data/useUser';
import Link from 'next/link';
import { destroyCookie } from 'nookies';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';

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
    // <AppBar position="static">
    <Toolbar>
      <Link href="/requests" passHref>
        <Typography variant="h6" style={{ marginRight: 25 }}>
          Requests
        </Typography>
      </Link>
      <Link href="/rules" passHref>
        <Typography variant="h6" style={{ marginRight: 25 }}>
          Rules
        </Typography>
      </Link>
      <Link href="/approvals" passHref>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Approvals
        </Typography>
      </Link>
      <Link href="/profile" passHref>
        <MuiLink style={{ marginRight: 25 }}>{user.username}</MuiLink>
      </Link>
      <Button color="inherit" onClick={() => logout()}>
        Logout
      </Button>
    </Toolbar>
    // </AppBar>
  );
};

export default Navbar;
