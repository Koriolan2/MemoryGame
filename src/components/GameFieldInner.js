import React, {useContext} from 'react';
import LiField from './LiField';
import { GameContext } from './Context';


export default function GameFieldInner ({startGame}) {
    const data = useContext(GameContext);
    let count = data.gameLevel.length;    
    let template = {};
    
    const generateTemplate = () => {
        if (count === 0) {
            return null;
        }
        
        if (count === 4) {
            return template = {
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr'
            }
        }
        if(count === 6) {
            return template = {
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: '1fr 1fr'
            }
        }

        if(count === 9) {
            return template = {
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: '1fr 1fr 1fr'
            }
        }
        return template;
    }

    if(startGame) {
    return (
        <ul className = "field__items" style={generateTemplate()}>
            {data.gameFloor.map(item => <LiField 
                                        key = {item.id}
                                        item = {item}
                                        />)}
        </ul>
        )
    }
    return (
        <ul className = "field__items" style={generateTemplate()}>
              {data.gameLevel.map((item , index) => <LiField 
                                            key = {index} 
                                            item = {item} 
                                            index = {index}
                                            />)}
        </ul>
    );
}