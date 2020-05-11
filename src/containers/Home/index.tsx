import React, { FC, memo } from 'react';
import { Paper } from 'sp-ops-react-ui';
import { NavLink } from 'react-router-dom';
import mfRouteProps from 'mfRouteProps';
import useStyles from './styles';

const logoSrc = (host: string) => `${host}/mf_logo.png`;

export const HomeComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.links}>
        {mfRouteProps.map(({ host, microFrontendName, path }) => (
          <NavLink key={microFrontendName} to={path}>
            <Paper className={classes.link}>
              <img src={logoSrc(host)} alt={microFrontendName} />
              <p>{microFrontendName}</p>
            </Paper>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const Home = memo(HomeComponent);
Home.displayName = 'Home';
export default Home;
