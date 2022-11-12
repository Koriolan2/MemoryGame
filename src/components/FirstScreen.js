import React, {useContext} from 'react';
import logo from '../images/logo.svg';
import '../styles/firstscreen.css';
import {useHistory} from 'react-router-dom';
import { GameContext } from './Context';

export default function FirstScreen () {
    
    const data = useContext(GameContext);
    const history = useHistory();

    if (data.selectLevel) {
        return history.push("/game");
    } 
    return (
        <div className="firstscreen">
            <img 
                src = {logo} 
                alt = "лого" 
            />
            <button 
                className = "button" 
                onClick = {() => data.setOpenWindow(true)}                
            > Грати </button>    

        </div>
    )
}