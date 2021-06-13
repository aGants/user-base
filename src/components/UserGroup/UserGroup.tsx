import React from 'react';
import { UserCard, UserCardModel } from '../UserCard/UserCard';
import { List, ListItem, ListItemText, Collapse, Divider } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useStyles from './style';

interface IGroup {
  users: UserCardModel[],
  min: number,
  max: number
}

export const UserGroup = (props:IGroup) => {
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
        if (userA.registered.age < userB.registered.age) return 0;
        return 0;
      })

  const result: UserCardModel[] = sortByAge(filterByAge(users, min, max))

  return (
    <List className={classes.root}>

    <ListItem button onClick={handleClick} className={classes.group}>
      <ListItemText color="primary"> {min} - {max} </ListItemText>
      { open ? <ExpandLess /> : <ExpandMore /> }
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div">
        { result.map((user: UserCardModel, key: number) => {
          return ( <UserCard key={key} user={user} /> )
        }
        )}
      </List>
      </Collapse>

      <Divider />
    
    </List>
  )
}

