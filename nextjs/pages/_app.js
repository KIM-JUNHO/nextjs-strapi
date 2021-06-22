import { useMemo } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { appWithTranslation } from 'next-i18next';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { emotionDarkTheme, emotionLightTheme, muiDarkTheme, muiLightTheme } from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const muiTheme = useMemo(
    () => (prefersDarkMode ? muiDarkTheme : muiLightTheme),
    [prefersDarkMode]
  );
  const emotionTheme = useMemo(
    () => (prefersDarkMode ? emotionDarkTheme : emotionLightTheme),
    [prefersDarkMode]
  );

  return (
    <EmotionThemeProvider theme={emotionTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <DefaultSeo {...SEO} />
        <GlobalStyles />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </EmotionThemeProvider>
  );
}

export default appWithTranslation(MyApp);
