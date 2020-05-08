import React, { FC, memo } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { AccountBalance } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import mfRouteProps from 'mfRouteProps';
import useStyles from './styles';

export const HomeComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.links}>
        {mfRouteProps.map(({ microFrontendName, path }) => (
          <NavLink key={microFrontendName} to={path}>
            <Paper className={classes.link}>
              <AccountBalance className={classes.icon} color="secondary" />
              <Typography>{microFrontendName}</Typography>
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
