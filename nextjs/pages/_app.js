import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
