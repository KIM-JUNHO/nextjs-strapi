import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/layout/Layout';

function HomePage() {
  const SEO = {
    title: 'RULER | Home',
    description: 'This is a Home Page',
  };
  const { t } = useTranslation('common');
  return (
    <Layout>
      <NextSeo {...SEO} />
      {t('Welcome to Next.js!')}
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default HomePage;
