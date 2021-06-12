import React, { useEffect, useState } from 'react';
import './App.css';
import 'fontsource-roboto';
import { Container }  from '@material-ui/core';
import { UserCardModel } from './UserCard/UserCard';
import axios from 'axios'
import { UserGroup } from './UserGroup/UserGroup';

const App: React.FC = () => {

  const [users, setUsers] = useState<UserCardModel[]>([]);

  useEffect( () => {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  let userList = [];
 
  for (let min=1; min<100; min+=9) {
    userList.push(<UserGroup key={min} min={min} max={min+9} users={users} />)
  }

  return (
    <Container className="App">
      { userList }
    </Container>
  );
}

export default App;
