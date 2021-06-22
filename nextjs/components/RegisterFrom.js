import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { register } from '../api/userApi';
import { setCookie } from 'nookies';
import Router from 'next/router';

const validationSchema = yup.object({
  username: yup.string('Enter your username').required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { username, password, email } = values;
      const res = await register({ username, password, email });
      await setCookie(null, 'jwt', res.jwt, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      Router.push('/profile');
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
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        REGISTER
      </Button>
    </form>
  );
};

export default RegisterForm;
