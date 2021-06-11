import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '20px auto',
      maxWidth: 450,
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
      padding: theme.spacing(1)
    }
  }),
);

export default useStyles;
