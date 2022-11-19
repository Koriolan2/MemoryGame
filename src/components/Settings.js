import React, {useContext} from 'react';
import '../styles/settings.css';
import { GameContext } from './Context';
import { TranslateDB } from './TransalteDB';

export default function Settings() {

    const data = useContext(GameContext);
    const t = React.createRef();

    return( 
    <>
        <h2>{data.language && TranslateDB[data.language].settingsTitle}</h2>

        <div className="timeRange">
            <p>{data.language && TranslateDB[data.language].howMuchTime}</p>
            <span className="time__range">{data.timerRange} секунд</span>
            <input 
                    type="range" 
                    min="5" 
                    max="60" 
                    ref={t}
                    value = {data.timerRange}
                    onInput = {()=>data.setTimerRange(t.current.value)}/>
        </div> 

        <div className="language__setting">
            <p>Оберіть мову:</p>
            <ul className = "language__items">
                <li 
                    className="language__item" 
                    onClick = {() => data.setLanguage('en')}>English</li>
                <li 
                    className="language__item"
                    onClick = {() => data.setLanguage('ua')}>Українська</li>
            </ul>    
            
        </div>      
    </>        
    );
}