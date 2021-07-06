import styled from '@emotion/styled';
import { Card } from 'antd';
import RegisterForm from '../components/form/RegisterFrom';

export default function RegisterPage() {
  return (
    <>
      <CardStyled title={<TitleStyled>REGISTER</TitleStyled>}>
        <RegisterForm />
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
