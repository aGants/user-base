import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Box, TextField, Typography }  from '@material-ui/core';
import useStyles from './style';
import 'fontsource-roboto';
import { UserCardModel } from '../types';
import { FavContextProvider, favReducer, initialFavState } from '../context/FavContext';
import { DragContextPovider} from '../context/DragContext';
import { UserGroup } from './UserGroup/UserGroup';
import Favorites from './Favorites/Favorites';
import Loading from './Loading/Loading';

const App: React.FC = () => {

  const [users, setUsers] = useState<UserCardModel[]>([]);
  const [value, setValue] = useState<String>('');
  const [loading, setLoading] = useState(false);

  const [favState, favDispatch] = React.useReducer(favReducer, initialFavState);

  const favContextValues = {
      favState,
      favDispatch
  }

  const classes = useStyles();

  const getRepos = async () => {
    try {
      setLoading(true)
      await axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        setUsers(res.data.results);
      }); 
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  };


  useEffect( () => { getRepos() }, []);  

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
    {loading ? <Loading /> : (
      <DragContextPovider>
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
      </DragContextPovider>
    )}
    </Container>
  );
}

export default App;
