import React from 'react';
import useStyles from './style';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { IUserGroup, UserCardModel } from '../../types'
import { UserCard } from '../UserCard/UserCard';

export const UserGroup = React.memo((props:IUserGroup) => {
  const [open, setOpen] = React.useState(true);

  const users = props.users;
  const min = props.min;  
  const max = props.max;

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  const filterByAge = (users: UserCardModel[], min: number, max: number) =>
    users.filter(user => 
      user.registered.age >= min && user.registered.age <= max);

  const sortByAge = (users: UserCardModel[]) => 
      users.sort((userA: UserCardModel, userB: UserCardModel) =>
      {
        if (userA.registered.age > userB.registered.age) return 1;
        if (userA.registered.age < userB.registered.age) return -1;
        return 0;
      })
      
  const result: UserCardModel[] = sortByAge(filterByAge(users, min, max))

  return (
    <List className={classes.root}>

    { result[0] === undefined ? (
      <ListItem button disabled>
        <ListItemText color="primary"> {min} - {max} </ListItemText>
        <ExpandMore /> 
      </ListItem>
    ) : (
      <>
        <ListItem button onClick={handleClick} className={classes.group}>
          <ListItemText color="primary"> {min} - {max} </ListItemText>
          { open ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>

        <Collapse in={open} unmountOnExit>
          <List component="div">
            { result.map((user: UserCardModel) => {
              return ( <UserCard key={user.login.uuid} user={user} /> 
              )
            }
            )}
          </List>
        </Collapse>
      </>
    )
  }
    </List>
  )
});
