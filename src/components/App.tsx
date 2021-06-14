import React, { useEffect, useState } from 'react';
import 'fontsource-roboto';
import { Container, Box, TextField, Typography }  from '@material-ui/core';
import { UserCardModel } from './UserCard/UserCard';
import axios from 'axios'
import { UserGroup } from './UserGroup/UserGroup';
import useStyles from './style';
import Favorites from './Favorites/Favorites';
import { FavContextProvider, favReducer, initialFavState } from '../context/FavContext';

const App: React.FC = () => {

  const [users, setUsers] = useState<UserCardModel[]>([]);
  const [value, setValue] = useState<String>('');

  const [favState, favDispatch] = React.useReducer(favReducer, initialFavState);

  const favContextValues = {
      favState,
      favDispatch
  }

  const classes = useStyles();


  useEffect( () => {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);  

  const searchUser = users.filter((user: any)  => {
    return user.name.first.toLowerCase().includes(value.toLowerCase()) 
      || user.name.last.toLowerCase().includes(value.toLowerCase())
  })

  let userList = [];
 
  for (let min=1; min<40; min+=10) {
    userList.push(<UserGroup key={min} min={min} max={min+9} users={searchUser} />)
  }

  return (
    <Container className={classes.root}>
      <FavContextProvider value={favContextValues}>
      <Box className={classes.column}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField 
            label="Поиск"
            placeholder="Поиск"
            multiline
            onChange={(event) => setValue(event.target.value)}
            />
        </form>
        { userList }
      </Box>
      <Box className={classes.column}>
        <Typography variant="h6" component="h1" className={classes.text} >
          Избранное
        </Typography>
        <Favorites />
      </Box>
      </FavContextProvider>
    </Container>
  );
}

export default App;
