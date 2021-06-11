import React from 'react';
import { Grid, Paper, Typography, ButtonBase } from '@material-ui/core'
import useStyles from './styleUserCard';

export interface UserCardModel {
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

interface PropsTypes {
  user:UserCardModel
}

export const UserCard = (props: PropsTypes) => {
  const user = props.user;
  const date = (user.registered.date).substr(0, 10);
  const classes = useStyles();

 return (
   <div className={classes.root}>
    <Paper elevation={3} className={classes.paper}>
      <Grid container>
        <Grid item className={classes.image}>
          <img className={classes.img} alt="avatar" src={user.picture.medium} />
        </Grid>
        <Grid className={classes.info} item direction="column">
          <Typography gutterBottom>{user.name.first} {user.name.last}, дата регистрации: { date }</Typography>
          <Typography >{user.email}</Typography>
        </Grid>
      </Grid>
    </Paper>
  </div>
 )
};