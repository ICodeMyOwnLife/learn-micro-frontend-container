import React, { FC, memo, Fragment, lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MicroFrontendRoute } from 'cb-react-micro-frontend';
import routeProps from 'routeProps';

const history = createBrowserHistory();
const Login = lazy(() => import('containers/Login'));
const ProductList = lazy(() => import('containers/ProductList'));

export const AppComponent: FC = () => (
  <Router history={history}>
    <nav>
      <Link to="/">Home</Link> |{' '}
      {routeProps.map(({ microFrontendName, path }) => (
        <Fragment key={microFrontendName}>
          <Link to={path}>{microFrontendName}</Link> |{' '}
        </Fragment>
      ))}
      <Link to="/login">Login</Link> | <Link to="/products">Products</Link>
    </nav>
    <nav>
      <Link to="/micro-frontend-1/home">MF1/Home</Link> |{' '}
      <Link to="/micro-frontend-1/contact">MF1/Contact</Link> |{' '}
      <Link to="/micro-frontend-1/about">MF1/About</Link> |{' '}
      <Link to="/micro-frontend-2/home">MF2/Home</Link> |{' '}
      <Link to="/micro-frontend-2/contact">MF2/Contact</Link> |{' '}
      <Link to="/micro-frontend-2/about">MF2/About</Link>
    </nav>
    <Suspense fallback="Loading ...">
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={ProductList} path="/products" />
        {routeProps.map(props => (
          <MicroFrontendRoute {...props} key={props.microFrontendName} />
        ))}
      </Switch>
    </Suspense>
  </Router>
);

const App = memo(AppComponent);
App.displayName = 'App';
export default App;
