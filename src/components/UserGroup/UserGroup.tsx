import React from 'react';
import { UserCard, UserCardModel } from '../UserCard/UserCard';
import { Typography } from '@material-ui/core'

interface IGroup {
  users: UserCardModel[],
  min: number,
  max: number
}

export const UserGroup = (props:IGroup) => {
  const users = props.users;
  const min = props.min;  
  const max = props.max;
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
    <div>
      <Typography>{min} - {max}</Typography>
      {result.map((user: UserCardModel, key: number) => {
        return ( <UserCard key={key} user={user}/> )
      }
      )}
    </div>
  )
}

