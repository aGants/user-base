import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: 'column',
      overflow: 'hidden'
    },
    group: {
      width: '100%',
    }
  }),
);

export default useStyles;
