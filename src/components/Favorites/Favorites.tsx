import React from 'react';
import { List }  from '@material-ui/core';
import { UserCard  } from '../UserCard/UserCard';
import FavContext from '../../context/FavContext';

const Favorites: React.FC = () => {
   const favContext = React.useContext(FavContext);

  return (
    <List component="div">
      
      { Object.keys(favContext.favState.favs).map((user) => {
        let _favs = favContext.favState.favs[user];
        if (_favs.length > 0) {
          return ( <UserCard key={_favs[0].login.username} user={_favs[0]} favorite/> )
        } else return null;
      }
      )}
    </List>
  )
}

export default Favorites