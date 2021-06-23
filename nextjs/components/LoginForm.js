import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { login } from '../api/userApi';
import { setCookie } from 'nookies';
import Router from 'next/router';
import useUser from '../data/useUser';

const validationSchema = yup.object({
  username: yup.string('Enter your username').required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginForm = () => {
  const { mutateUser } = useUser();
  const formik = useFormik({
    initialValues: {
      username: 'root',
      password: '!q1w2e3r4',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      const res = await login({ username, password });
      await setCookie(null, 'jwt', res.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      await mutateUser();
      Router.push('/');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="username"
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        autoComplete="off"
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        LOGIN
      </Button>
    </form>
  );
};

export default LoginForm;
