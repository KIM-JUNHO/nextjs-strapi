import styled from '@emotion/styled';

function Home() {
  return <HomeStyled>Welcome to Next.js!</HomeStyled>;
}

const HomeStyled = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.colors.primary};
`;

export default Home;
