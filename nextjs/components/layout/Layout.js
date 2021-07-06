import Header from './Header';
import styled from '@emotion/styled';

export default function MyLayout({ aside, children }) {
  return (
    <Wrapper>
      <Header />
      <BodyStyled>
        {aside && <Aside>{aside}</Aside>}
        <ContentStyled>{children}</ContentStyled>
      </BodyStyled>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

const Aside = styled.div``;

const BodyStyled = styled.div`
  flex-grow: 1;
  display: flex;
`;

const ContentStyled = styled.div`
  background: rgb(250, 250, 251);
  flex-grow: 1;
  padding: 20px;
`;
