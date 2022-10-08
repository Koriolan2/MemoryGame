import React from 'react';

export default function GameFieldInner ({arr, startGame, dragOverHandler, dragLeaveHandler, dragEndHendler, dropHendler}) {
    let count = arr.length;    
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

    
    return (
        <ul className = "field__items" style={generateTemplate()}>
              {arr.map((item , index) => 
                <li 
                    className="field__item" 
                    key = {index} 
                    data-pic = {item}
                    onDragOver = {e => dragOverHandler(e)}
                    onDragLeave = {e => dragLeaveHandler(e)}
                    onDragEnd = {e => dragEndHendler(e)}
                    onDrop = {e => dropHendler(e)} 
                > 
                {
                    !startGame && 
                    <img 
                        src = {item}  
                        alt = 'element'
                    />
                }
                        
              
                    
                </li>
              )}      
                       
                    
        </ul>
    );
}