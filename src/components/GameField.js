import React, {useState, useEffect} from 'react';
import '../styles/gamefield.css';
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import useTimer from '../hooks/useTimer';
// import DeleteButton from './DeleteButton';


export default function GameField ({selectLevel, arr}) {
    const [minutes, seconds] = useTimer(selectLevel);
    const [startGame, isStartGame] = useState(null);

    //копия картинки, котоую мы перетаскиваем в dragStartHendler
    const [currentDetail, setCurrentDetail] = useState(null);    
    // посадочное место, куда помещаем картинку при перетаскивании в dropHendler
    const [currentElement, setCurrentElement] = useState(null);    
   

    useEffect(()=> {
        if (minutes === 0 && seconds === 0) {isStartGame(true)};
    }, [minutes, seconds])
    
       
    const dragOverHandler = (e) => {
        e.preventDefault();
        if (e.target.matches('img')) {
            e.target.style.boxShadow = '0 0 8px #ff0000';
        } 
       
    }

    const dragLeaveHandler = (e) => {
        if (e.target.matches('img')) {
            e.target.style.boxShadow = 'none'
        } 
        
    }

    const dragStartHendler = (e) => {
        if(e.target.matches('img')) {
            let copyElement = e.target.cloneNode(true);
            setCurrentDetail(copyElement);
        }
        
       
    }

    const dragEndHendler = (e) => {
        if (e.target.matches('img')) {
            e.target.style.boxShadow = 'none'
        } 
       
    }

    const dropHendler = (e) => {
        e.preventDefault();
        if (e.target.matches('.field__item')) {
            e.target.append(currentDetail);
            
            if(currentDetail.getAttribute('src') === e.target.getAttribute('data-pic')){
                e.target.classList.add('field__succsess');
                setCurrentElement(e.target);
            } else {
                
                e.target.classList.add('field__error');
                
                setCurrentElement(e.target);
                
                
                // e.target.insertAdjacentHTML('beforeend', "<span class='delete__button'>+</span>")      
            }  
                    
        }

        // setCurrentElement(e.target.querySelector('img'));    
         
    }

    return (
        <>
            <h2>Рівень складності {selectLevel.title} </h2>
            {
                selectLevel.title && <Timer minutes = {minutes} seconds = {seconds}/>
            }
            
            <div className = "field">
                <GameFieldInner 
                    arr = {arr}
                    startGame = {startGame}
                    dragOverHandler = {dragOverHandler}
                    dragLeaveHandler = {dragLeaveHandler}
                    dragEndHendler = {dragEndHendler}
                    dropHendler = {dropHendler} 
                    currentElement = {currentElement}
                      
                />
            </div>
            <div className = "details">
                <DetailsInner 
                    dragOverHandler = {dragOverHandler}
                    dragLeaveHandler = {dragLeaveHandler}
                    dragEndHendler = {dragEndHendler}
                    dragStartHendler = {dragStartHendler}                    
                />
            </div>
        </>
    );
}