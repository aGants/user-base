import React from "react";

export interface UserCardModel {
  login: {
    uuid: string
  },
  registered: {
    age: number
    date: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  picture: {
   medium: string
  }
}

export interface UserCardPropsTypes {
  user:UserCardModel,
  favorite?: boolean
}


export interface IUserGroup {
  users: UserCardModel[],
  min: number,
  max: number
}

//FavContext
export interface IFavState {
  favs: { [key: string]: UserCardModel[] };
}
export interface IFavActions {
  type: 'add_fav' | 'remove_fav';
  payload: UserCardModel;
}
export interface IFavContextProps {
  favState: IFavState;
  favDispatch: React.Dispatch<IFavActions>;
}


//DragContex
export interface IDragContextProps {
  currentDrag: UserCardModel;
  setCurrentDrag: React.Dispatch<UserCardModel>;
}
