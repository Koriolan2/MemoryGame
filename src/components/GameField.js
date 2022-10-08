import React, {useState, useEffect} from 'react';
import '../styles/gamefield.css';
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import useTimer from '../hooks/useTimer';


export default function GameField ({selectLevel, arr}) {

    const [currentDetail, setCurrentDetail] = useState(null);

    const [minutes, seconds] = useTimer(selectLevel);
    const [startGame, isStartGame] = useState(null);

    useEffect(()=> {
        if (minutes === 0 && seconds === 0) {isStartGame(true)};
    }, [minutes, seconds])
    
 
    const dragOverHandler = (e) => {
        e.preventDefault();
        if (e.target.matches('img')) {
            e.target.style.boxShadow = '0 0 8px #ff0000';
        } 
        console.log("dragOverHandler ")
    }

    const dragLeaveHandler = (e) => {
        if (e.target.matches('img')) {
            e.target.style.boxShadow = 'none'
        } 
        console.log("dragLeaveHandler")
    }

    const dragStartHendler = (e) => {
        if(e.target.matches('img')) {
            let copyElement = e.target.cloneNode(true);
            console.log(copyElement);
            setCurrentDetail(copyElement);
        }
        
        console.log("dragStartHendler");
    }

    const dragEndHendler = (e) => {
        if (e.target.matches('img')) {
            e.target.style.boxShadow = 'none'
        } 
        console.log("dragEndHendler")
    }
    const dropHendler = (e) => {
        e.preventDefault();
        if (e.target.matches('.field__item')) {
            e.target.append(currentDetail);
        }
        console.log(e.target);
        console.log("dropHendler")
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