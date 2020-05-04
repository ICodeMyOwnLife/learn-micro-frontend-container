import { makeStyles, createStyles, Theme } from '@material-ui/core';

const styles = ({ spacing, zIndex }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      height: 64,
      zIndex: zIndex.drawer + 1,
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      maxHeight: '100%',
      color: 'white',
    },
    img: {
      width: 64,
      marginRight: spacing(1),
    },
    pad: {
      flex: 1,
    },
    navbar: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(0, 2),
    },
    subNavbar: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(0, 2),
      justifyContent: 'center',
      marginTop: spacing(2),
    },
  });

const useStyles = makeStyles(styles, { name: 'App' });

export default useStyles;
