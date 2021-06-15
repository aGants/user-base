import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%'
    },
    drop: {
      height: '100%',
      border: '2px solid #3f51b5',
      margin: '-2px'
    }
  }),
);

export default useStyles;
