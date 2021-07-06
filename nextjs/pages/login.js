import styled from '@emotion/styled';
import { Card } from 'antd';
import LoginForm from '../components/form/LoginForm';

export default function LoginPage() {
  return (
    <>
      <CardStyled title={<TitleStyled>LOGIN</TitleStyled>}>
        <LoginForm />
      </CardStyled>
    </>
  );
}

const TitleStyled = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const CardStyled = styled(Card)`
  padding: 30px;
  margin: 30px;
`;
