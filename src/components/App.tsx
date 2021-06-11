import React, { useEffect, useState } from 'react';
import './App.css';
import 'fontsource-roboto';
import { Container, Box }  from '@material-ui/core';
import { UserCard, UserCardModel } from './UserCard/UserCard';
import axios from 'axios'

const App: React.FC = () => {

  const [users, setUsers] = useState<UserCardModel[]>([]);

  useEffect( () => {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  console.log(users)
  
  return (
    <Container className="App">
      {users.map((user: UserCardModel, key: number) => {
         return (
          <UserCard key={key} user={user}/>
        )
      })}
    </Container>
  );
}

export default App;
