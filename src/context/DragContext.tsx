import React from 'react';
import { IDragContextProps, UserCardModel } from '../types';

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
