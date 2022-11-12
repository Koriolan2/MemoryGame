import React, {useState, createContext} from 'react';
import useArray from '../hooks/useArray'

export const GameContext = createContext();

const Context = (props) => {
    const [selectLevel, setSelectLevel] = useState({});
    const [openWindow, setOpenWindow] = useState(null);
        
    const [gameLevel, allUniquePicture,  gameFloor] = useArray(selectLevel.count);
    
    const value = {
        openWindow,
        setOpenWindow,
        selectLevel,
        setSelectLevel,
        gameLevel,
        allUniquePicture,
        gameFloor
    };

    return (
        <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
    )
}
export default Context;