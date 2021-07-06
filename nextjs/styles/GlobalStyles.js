import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import 'antd/dist/antd.css';

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
