import React from 'react';
import { IFavState, IFavActions, IFavContextProps  } from '../types';

export const initialFavState: IFavState = {
  favs: {}
};

export const favReducer = (state: IFavState, action: IFavActions) => {
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

          return { ...state, favs}
      default:
          return state;
  }
};

const FavContext = React.createContext<IFavContextProps>({
  favState: initialFavState,
  favDispatch: () => {}
});

export const FavContextConsumer = FavContext.Consumer;
export const FavContextProvider = FavContext.Provider;
export default FavContext;
