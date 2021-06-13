import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2),
      minWidth: 230,
      width: 500,
    },
    image: {
      width: 72,
      height: 72,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    info: {
      padding: theme.spacing(1, 2)
    }
  }),
);

export default useStyles;
