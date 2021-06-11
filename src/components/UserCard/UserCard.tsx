import React from 'react';
import { Grid, Typography, ButtonBase } from '@material-ui/core'
import './UserCard.scss';

export interface UserCardModel {
  dob: {
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
  const user = props.user


 return (
    <div>
      <Grid>
        <img className="user-img" alt="avatar" src={user.picture.medium} />
      </Grid>
      <Grid>
        {user.name.first}
        {user.name.last}
      </Grid>
    </div>
 )
};
