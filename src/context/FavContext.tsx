import React from 'react';
import { UserCardModel } from '../components/UserCard/UserCard';

export const initialFavState: IFavState = {
  favs: {}
};

export interface IFavActions {
  type: 'add_fav' | 'remove_fav';
  payload: UserCardModel;
}

export interface IFavState {
  favs: { [key: string]: UserCardModel[] };
}

export const favReducer = (state: IFavState, action: IFavActions) => {

  // const [favState, favDispatch] = React.useReducer(favReducer, initialFavState);
  
  let fav = action.payload;
  let favs = { ...state.favs };

  switch (action.type) {
      case 'add_fav':
        favs[fav.login.username] = [fav];
          return { ...state, favs };
      case 'remove_fav':

        favs[fav.login.username].pop();

        if (favs[fav.login.username].length === 0) {
          delete favs[fav.login.username]
        };

        console.log(favs)
          return { ...state, favs}
      default:
          return state;
  }
};

export interface IFavContextProps {
  favState: IFavState;
  favDispatch: React.Dispatch<IFavActions>;
}

const FavContext = React.createContext<IFavContextProps>({
  favState: initialFavState,
  favDispatch: () => {}
});

export const FavContextConsumer = FavContext.Consumer;
export const FavContextProvider = FavContext.Provider;
export default FavContext;
