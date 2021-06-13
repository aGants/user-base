import React, { useEffect, useState } from 'react';
import 'fontsource-roboto';
import { Container, Box, TextField}  from '@material-ui/core';
import { UserCardModel } from './UserCard/UserCard';
import axios from 'axios'
import { UserGroup } from './UserGroup/UserGroup';
import useStyles from './style';

const App: React.FC = () => {

  const [users, setUsers] = useState<UserCardModel[]>([]);
  const [value, setValue] = useState<String>('');

  const classes = useStyles();

  useEffect( () => {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  const searchUser = users.filter(user => {
    return user.name.first.toLowerCase().includes(value.toLowerCase()) 
      || user.name.last.toLowerCase().includes(value.toLowerCase())
  })

  let userList = [];
 
  for (let min=1; min<40; min+=10) {
    userList.push(<UserGroup key={min} min={min} max={min+9} users={searchUser} />)
  }

  return (
    <Container className={classes.root}>
      <Box className={classes.List}>
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
      <Box>

      </Box>
    </Container>
  );
}

export default App;
