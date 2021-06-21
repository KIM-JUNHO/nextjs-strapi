import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

function HomePage() {
  const SEO = {
    title: 'RULER | Home',
    description: 'This is a Home Page',
  };
  const { t } = useTranslation('common');
  return (
    <Layout>
      <HomeStyled>
        <NextSeo {...SEO} />
        {t('Welcome to Next.js!')}
      </HomeStyled>
    </Layout>
  );
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default HomePage;
