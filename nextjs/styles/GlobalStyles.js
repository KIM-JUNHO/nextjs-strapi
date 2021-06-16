import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
  );
}

export default GlobalStyles;
