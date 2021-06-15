import React from 'react';
import { UserCardModel } from '../components/UserCard/UserCard';

export interface IDragContextProps {
  currentDrag: UserCardModel;
  setCurrentDrag: React.Dispatch<UserCardModel>;
}

const DragContext = React.createContext<IDragContextProps>({
  currentDrag: {} as any,
  setCurrentDrag: () => {}
});

export const DragContextPovider: React.FC = (props) => {
    const [currentDrag, setCurrentDrag] = React.useState<UserCardModel>({} as UserCardModel);
    return(
        <DragContext.Provider value={{currentDrag, setCurrentDrag}}>
            {props.children}
        </DragContext.Provider>
    )
}

export default DragContext;
