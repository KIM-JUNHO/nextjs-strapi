import Link from 'next/link';
import Button from '@material-ui/core/Button';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <>
      <LoginForm />
      <Link href="/register">
        <Button color="primary" fullWidth>
          Register
        </Button>
      </Link>
    </>
  );
}

export default LoginPage;
