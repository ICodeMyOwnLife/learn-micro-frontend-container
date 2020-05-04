import React, { FC, memo } from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import theme from 'theme';
import jssInstance, { generateClassName, sheetManager } from 'jssInstance';
import App from 'App';

const history = createBrowserHistory();

console.log(theme);

export const RootComponent: FC = () => {
  return (
    <StylesProvider
      generateClassName={generateClassName}
      jss={jssInstance}
      sheetsManager={sheetManager}
    >
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <CssBaseline />
          <App />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
};

const Root = memo(RootComponent);
Root.displayName = 'Root';
export default Root;
