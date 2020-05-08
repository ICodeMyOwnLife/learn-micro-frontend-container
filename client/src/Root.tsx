import React, { FC, memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core';
import theme from 'theme';
import jssInstance, { generateClassName, sheetManager } from 'jssInstance';
import App from 'App';

console.log(theme);

export const RootComponent: FC = () => {
  return (
    <BrowserRouter>
      <StylesProvider
        generateClassName={generateClassName}
        jss={jssInstance}
        sheetsManager={sheetManager}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

const Root = memo(RootComponent);
Root.displayName = 'Root';
export default Root;
