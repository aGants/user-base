import React from 'react';
import useStyles from './style';
import { List }  from '@material-ui/core';
import { UserCard  } from '../UserCard/UserCard';
import FavContext from '../../context/FavContext';
import DragContext from '../../context/DragContext';

const Favorites: React.FC = () => {
  const classes = useStyles();
  const favContext = React.useContext(FavContext);
  const dragContext = React.useContext(DragContext);

  const [drag, setDrag] = React.useState(false);

  function dragStartHandler(e:any) {
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHandler(e:any) {
    e.preventDefault()
    setDrag(false)
  }

  function onDropHandler(e:any) {
    e.preventDefault()
    favContext.favDispatch({ type: 'add_fav', payload: dragContext.currentDrag })
    setDrag(false)
  }

  return (
    <List component="div" className={drag ? (`${classes.drop} `) : (`${classes.root}`)}
      onDragStart={(e:any)=>dragStartHandler(e)}
      onDragLeave={(e:any)=>dragLeaveHandler(e)}
      onDragOver={(e:any)=>dragStartHandler(e)}
      onDrop={(e:any) => onDropHandler(e)}
    >
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

export default Favorites;
