import React, { FC, memo, lazy, Suspense, useRef } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Link,
  Menu,
  IconButton,
  MenuItem,
  Divider,
  Popover,
  Paper,
} from 'sp-ops-react-ui';
import { AppsTwoTone, MenuTwoTone } from '@material-ui/icons';
import { MicroFrontendRoute } from 'sp-ops-micro-frontend';
import { useToggle } from 'cb-hooks';
import mfRouteProps from 'mfRouteProps';
import useStyles from './styles';
import { subRouteProps1, subRouteProps2 } from 'subRouteProps';
import logoSrc from './logo.png';

const Home = lazy(() => import('containers/Home'));
const Login = lazy(() => import('containers/Login'));
const ProductList = lazy(() => import('containers/ProductList'));

export const AppComponent: FC = () => {
  const classes = useStyles();
  const [mainMenuOpen, , showMainMenu, closeMainMenu] = useToggle();
  const mainMenuAnchorRef = useRef<HTMLAnchorElement>(null);
  const [subMenuOpen, , showSubMenu, closeSubMenu] = useToggle();
  const subMenuAnchorRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} component="header" position="sticky">
        <Toolbar>
          <Link className={classes.brand} component={NavLink} to="/">
            <img className={classes.img} src={logoSrc} alt="Logo" />
            <h6>MF CONTAINER</h6>
          </Link>

          <IconButton
            color="secondary"
            onClick={showSubMenu}
            innerRef={subMenuAnchorRef}
          >
            <MenuTwoTone />
          </IconButton>

          <Menu
            anchorEl={subMenuAnchorRef.current}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            getContentAnchorEl={null}
            onClose={closeSubMenu}
            open={subMenuOpen}
          >
            {subRouteProps1.map(({ name, path }) => (
              <MenuItem button component={NavLink} key={name} to={path}>
                {name}
              </MenuItem>
            ))}
            <Divider />
            {subRouteProps2.map(({ name, path }) => (
              <MenuItem button component={NavLink} key={name} to={path}>
                {name}
              </MenuItem>
            ))}
          </Menu>

          <div className={classes.pad} />

          <IconButton
            color="secondary"
            onClick={showMainMenu}
            innerRef={mainMenuAnchorRef}
          >
            <AppsTwoTone />
          </IconButton>

          <Popover
            anchorEl={mainMenuAnchorRef.current}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            classes={{ paper: classes.popover }}
            getContentAnchorEl={null}
            onClose={closeMainMenu}
            open={mainMenuOpen}
          >
            <div className={classes.navbar}>
              {mfRouteProps.map(({ host, microFrontendName, path }) => (
                <NavLink key={microFrontendName} to={path}>
                  <Paper className={classes.navbarItem}>
                    <img
                      className={classes.navbarImg}
                      src={`${host}/mf_logo.png`}
                      alt={microFrontendName}
                    />
                  </Paper>
                </NavLink>
              ))}
            </div>
          </Popover>

          <Link color="secondary" component={NavLink} to="/login">
            Login
          </Link>
        </Toolbar>
      </AppBar>

      <Suspense fallback="Loading ...">
        <Switch>
          <Route component={Home} exact path="/" />
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
