import React from 'react';
import useStyles from './style';
import { Grid, Paper, Typography, ListItem, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import FavContext from '../../context/FavContext';

export interface UserCardModel {
  login: {
    username: string
  },
  registered: {
    age: number
    date: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
   medium: string
  }
}

export interface PropsTypes {
  user:UserCardModel,
  favorite?: boolean
}

export const UserCard = (props: PropsTypes) => {
  const user = props.user;
  const date = (user.registered.date).substr(0, 10);
  const classes = useStyles();
  const isFav = props.favorite;

  const favContext = React.useContext(FavContext);

  function toAdd () {
    if (!isFav) {
      favContext.favDispatch({ type: 'add_fav', payload: user })
    }
  }

 return (
  <ListItem className={classes.root}
    draggable={true} 
    onClick={() => { toAdd()} }
  >
    <Paper elevation={3} className={classes.card}>
      <Grid container spacing={3}>
        <Grid item xs={2} >
          <img className={classes.img} alt="avatar" src={user.picture.medium} />
        </Grid>
        <Grid  sm item>
          <Typography gutterBottom>{user.name.first} {user.name.last}, дата регистрации: { date }</Typography>
          <Typography >{user.email}</Typography>
        </Grid>
          { isFav ? (
            <Grid xs={2} item>
              <IconButton aria-label="delete"
                onClick={()=> favContext.favDispatch({ type: 'remove_fav', payload: user })}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          ) : null }
      </Grid>
    </Paper>
  </ListItem>
 )
};
