import { createMuiTheme } from '@material-ui/core/styles';

export const muiLightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

export const muiDarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export const emotionLightTheme = {
  colors: {
    primary: 'DarkBlue',
  },
};

export const emotionDarkTheme = {
  colors: {
    primary: 'Gray',
  },
};
