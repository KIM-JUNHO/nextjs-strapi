import { Form, Input, Button, Checkbox } from 'antd';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import useUser from '../../data/useUser';
import { login } from '../../api/userApi';

export default function LoginAntdForm() {
  const { mutate } = useUser();
  const router = useRouter();

  const onFinish = async (values) => {
    const { username, password } = values;
    const res = await login({ username, password });
    await setCookie(null, 'jwt', res.jwt, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    await mutate();

    if (values.remember) {
      localStorage.setItem('username', values.username);
    } else {
      localStorage.removeItem('username');
    }

    router.push('/');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="user"
      initialValues={{
        username: 'root',
        password: '!q1w2e3r4',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      requiredMark={false}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
