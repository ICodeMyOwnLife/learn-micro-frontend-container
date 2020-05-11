import { makeStyles, createStyles, Theme } from 'sp-ops-react-ui';

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
    popover: {
      padding: spacing(2),
    },
    navbar: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(0, 2),
    },
    navbarItem: {
      width: 40,
      height: 40,
      padding: spacing(1),
    },
    navbarImg: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });

const useStyles = makeStyles(styles, { name: 'App' });

export default useStyles;
