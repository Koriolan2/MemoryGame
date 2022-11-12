import React, {useState, useEffect, useContext} from 'react';
import '../styles/gamefield.css';
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import useTimer from '../hooks/useTimer';
import { GameContext } from './Context';


export default function GameField () {
    const data = useContext(GameContext);
    const [minutes, seconds] = useTimer(data.selectLevel);
    const [startGame, isStartGame] = useState(null);

    useEffect(()=> {
        if (minutes === 0 && seconds === 0) {isStartGame(true)};
    }, [minutes, seconds])
    
    
    return (
        <>
            <h2>Рівень складності {data.selectLevel.title} </h2>
            {
                data.selectLevel.title && <Timer minutes = {minutes} seconds = {seconds}/>
            }
            
            <div className = "field">
                <GameFieldInner startGame = {startGame} />
            </div>
            <div className = "details">
                <DetailsInner/>
            </div>
        </>
    );
}