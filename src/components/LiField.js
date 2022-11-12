import React from 'react';


export default function LiField({ item, index}) {
    
    return (
        <li
            className = 'field__item'
            key={index}            
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