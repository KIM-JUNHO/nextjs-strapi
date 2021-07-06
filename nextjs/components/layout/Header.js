import Link from 'next/link';
import styled from '@emotion/styled';
import useUser from '../../data/useUser';
import { Menu, Dropdown, Button } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { useEffect } from 'react';

export default function Header() {
  const { data, loading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.replace('/login');
    }
  }, [error, router]);

  const logout = () => {
    destroyCookie(null, 'jwt');
    router.push('/login');
  };

  return (
    <Wrapper>
      <MenuWrapper>
        <Link href="/" passHref>
          <LogoText>FPMS RULER</LogoText>
        </Link>
        <Link href="/requests" passHref>
          <MenuText>Request</MenuText>
        </Link>
        <Link href="/approvals" passHref>
          <MenuText>Approval</MenuText>
        </Link>
        <Link href="/rules" passHref>
          <MenuText>Rule</MenuText>
        </Link>
      </MenuWrapper>

      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="0">
              <Button type="text" onClick={() => router.push('/profile')}>
                Profile
              </Button>
            </Menu.Item>
            <Menu.Item key="1">
              <Button type="text" onClick={logout}>
                Logout
              </Button>
            </Menu.Item>
          </Menu>
        }
        trigger={['click']}
      >
        <UsernameButton type="text">
          {data && data.username}
          <CaretDownOutlined />
        </UsernameButton>
      </Dropdown>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  z-index: 1040;
  box-shadow: rgb(40 42 49 / 16%) 0px 1px 2px 0px;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const LogoText = styled.div`
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  margin: 0 15px 0 30px;
`;

const MenuText = styled.div`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 15px;
`;

const UsernameButton = styled(Button)`
  height: 100%;
`;
