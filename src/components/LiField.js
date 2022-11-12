import React, {useContext} from 'react';
import { GameContext } from './Context';


export default function LiField({ item, index}) {
    const data = useContext(GameContext);
    return (
        <li
            className = 'field__item'
            key={index} 
            onDragOver = {e => data.dragOverHandler(e, item)}
            onDragLeave = {e => data.dragLeaveHandler(e)} 
            onDragEnd = {e => data.dragNedHandler(e)} 
            onDrop = {e => data.dropHandler(e, item)}
            onDragStart = {e => data.dragStartHandler(e, item, 'two')} 
                   
        >
            {
                item.pic &&
                <img
                    src={item.pic}
                    alt='element'
                    
                />
            }

           

        </li>
    );
}