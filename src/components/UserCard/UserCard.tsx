import React from 'react';
import useStyles from './style';
import { Grid, Paper, Typography, ListItem, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { UserCardPropsTypes } from '../../types';
import FavContext from '../../context/FavContext';
import DragContext from '../../context/DragContext';

export const UserCard = (props: UserCardPropsTypes) => {
  const dragContext = React.useContext(DragContext);

  const user = props.user;
  const date = (user.registered.date).substr(0, 10);
  const classes = useStyles();
  const isFav = props.favorite;

  const favContext = React.useContext(FavContext);

  function dragStartHandler(e:any, user:any) {
    dragContext.setCurrentDrag(user)
  }

 return (
   <div className={'card'}>

  <ListItem className={isFav ? (classes.root) : (`${classes.root} ${classes.drag}`)}
    draggable={!isFav && true} 
    onDragStart={(e) => dragStartHandler(e, user)}
    >
    <Paper elevation={3} className={classes.card}>
      <Grid container spacing={3}>
        <Grid item xs={2} >
          <img className={classes.img} alt="avatar" src={user.picture.medium} />
        </Grid>
        <Grid sm item className={'card'}>
          <Typography gutterBottom>{user.name.first} {user.name.last}, дата регистрации: { date }</Typography>
          <Typography >{user.email}</Typography>
        </Grid>
          { isFav && (
            <Grid xs={2} item>
              <IconButton aria-label="delete"
                onClick={()=> favContext.favDispatch({ type: 'remove_fav', payload: user })}
                >
                <DeleteIcon />
              </IconButton>
            </Grid>
          )}
      </Grid>
    </Paper>
  </ListItem>
          </div>
 )
};
