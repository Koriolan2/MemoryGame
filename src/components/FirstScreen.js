import React from 'react';
import logo from '../images/logo.svg';
import '../styles/firstscreen.css';
import {useHistory} from 'react-router-dom';

export default function FirstScreen ({setOpenWindow, selectLevel}) {
    const history = useHistory();

    if (selectLevel) {
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
                onClick = {() => setOpenWindow(true)}                
            > Грати </button>    

        </div>
    )
}