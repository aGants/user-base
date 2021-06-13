import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    form: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '90%'
      }
    },
    List: {
      minWidth: '50%'
    },
  }),
);

export default useStyles;
