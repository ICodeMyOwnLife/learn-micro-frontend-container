import { makeStyles, createStyles, Theme } from 'sp-ops-react-ui';

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 64px)',
    },
    links: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: spacing(3),
    },
    link: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing(3),
      textDecoration: 'none',
    },
    icon: {
      fontSize: 128,
    },
  });

const useStyles = makeStyles(styles, { name: 'Home' });

export default useStyles;
