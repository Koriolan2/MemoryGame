import React from 'react';
import DeleteButton from './DeleteButton'

export default function LiField({ item, index, startGame, dragOverHandler, dragLeaveHandler, dragEndHendler, dropHendler, currentElement}) {
    
    return (
        <li
            className = 'field__item'
            key={index}
            data-pic={item}
            onDragOver={e => dragOverHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragEnd={e => dragEndHendler(e)}
            onDrop={e => dropHendler(e)}
        >
            {
                !startGame &&
                <img
                    src={item}
                    alt='element'
                />
            }

            <DeleteButton currentElement={currentElement}/>

        </li>
    );
}