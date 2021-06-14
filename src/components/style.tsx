import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      overflow: 'hidden'
    },
    form: {
      '& .MuiTextField-root': {
        width: '90%'
      }
    },
    column: {
      minWidth: '50%',
      marginTop: theme.spacing(2)
    },
    text: {
      textAlign: 'center',
      margin: theme.spacing(1),
    },
    list: {
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }
  }),
);

export default useStyles;
