import React, { FC, memo, Fragment } from 'react';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MicroFrontendRoutes } from 'cb-react-micro-frontend';
import routeProps from 'routeProps';

const history = createBrowserHistory();

export const AppComponent: FC = () => (
  <Router history={history}>
    <nav>
      <Link to="/">Home</Link> |{' '}
      {routeProps.map(({ microFrontendName, path }) => (
        <Fragment key={microFrontendName}>
          <Link to={path}>{microFrontendName}</Link> |{' '}
        </Fragment>
      ))}
    </nav>
    <nav>
      <Link to="/micro-frontend-1/home">MF1/Home</Link> |{' '}
      <Link to="/micro-frontend-1/contact">MF1/Contact</Link> |{' '}
      <Link to="/micro-frontend-1/about">MF1/About</Link> |{' '}
      <Link to="/micro-frontend-2/home">MF2/Home</Link> |{' '}
      <Link to="/micro-frontend-2/contact">MF2/Contact</Link> |{' '}
      <Link to="/micro-frontend-2/about">MF2/About</Link>
    </nav>
    <MicroFrontendRoutes
      fallback="Loading MicroFrontend"
      routeProps={routeProps}
    />
  </Router>
);

const App = memo(AppComponent);
App.displayName = 'App';
export default App;
