import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(3),
      flexWrap: 'nowrap'
    },
    card: {
      padding: theme.spacing(2),
      minWidth: 230,
      width: 550,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    }
  }),
);

export default useStyles;
