import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { emotionLightTheme, muiLightTheme } from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <EmotionThemeProvider theme={emotionLightTheme}>
      <MuiThemeProvider theme={muiLightTheme}>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </EmotionThemeProvider>
  );
}

export default appWithTranslation(MyApp);
