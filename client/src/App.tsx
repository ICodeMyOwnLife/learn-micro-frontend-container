import React, { FC, memo, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { MicroFrontendRoute } from 'cb-react-micro-frontend';
import mfRouteProps from 'mfRouteProps';
import theme from 'theme';
import useStyles from './styles';
import appRouteProps from 'appRouteProps';
import ForwardRefNavLink from 'components/ForwardRefNavLink';
import { subRouteProps1, subRouteProps2 } from 'subRouteProps';
import logoSrc from './logo.png';

const Login = lazy(() => import('containers/Login'));
const ProductList = lazy(() => import('containers/ProductList'));

console.log(theme);

export const AppComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} component="header" position="sticky">
        <Toolbar>
          <Link className={classes.brand}>
            <img className={classes.img} src={logoSrc} alt="Logo" />
            <Typography variant="h6">MF CONTAINER</Typography>
          </Link>
          <div className={classes.pad} />
          <nav className={classes.navbar}>
            {appRouteProps.map(({ name, path }) => (
              <Link
                color="secondary"
                component={ForwardRefNavLink}
                to={path}
                key={name}
              >
                {name}
              </Link>
            ))}
          </nav>
        </Toolbar>
      </AppBar>

      <nav className={classes.subNavbar}>
        {subRouteProps1.map(({ name, path }) => (
          <Link component={ForwardRefNavLink} key={name} to={path}>
            {name}
          </Link>
        ))}
      </nav>

      <nav className={classes.subNavbar}>
        {subRouteProps2.map(({ name, path }) => (
          <Link component={ForwardRefNavLink} key={name} to={path}>
            {name}
          </Link>
        ))}
      </nav>

      <Suspense fallback="Loading ...">
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={ProductList} path="/products" />
          {mfRouteProps.map(props => (
            <MicroFrontendRoute {...props} key={props.microFrontendName} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

const App = memo(AppComponent);
App.displayName = 'App';
export default App;
