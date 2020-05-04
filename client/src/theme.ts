import { createMuiTheme } from '@material-ui/core';
import { deepPurple, amber } from '@material-ui/core/colors';

const win = window as any;

const defaultTheme = createMuiTheme({
  overrides: {
    MuiLink: {
      root: {
        fontWeight: 'bolder',
        textDecoration: 'none',
      },
    },
  },
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

const theme = (win._theme = win._theme || defaultTheme);

export default theme;
