import React, {useState, useEffect, createContext} from 'react';
import useArray from '../hooks/useArray';
import useGameTimer from '../hooks/useGameTimer';

export const GameContext = createContext();


const Context = (props) => {
    const [selectLevel, setSelectLevel] = useState({});
    const [openWindow, setOpenWindow] = useState(null);        
    const [gameLevel, allUniquePicture,  gameFloor] = useArray(selectLevel.count);
    const [gameFloorState, setGameFloorState] = useState([]);
    const [gameLevelState, setGameLevelState] = useState([]);
    const [allUniquePictureState, setAllUniquePictureState] = useState([]);
    const [startGame, isStartGame] = useState(null);

    useEffect(() => {
        setGameFloorState(gameFloor);
        setGameLevelState(gameLevel);
        setAllUniquePictureState(allUniquePicture);
    }, [selectLevel]);

    //для перетягування
    const [currentCart, setCurrentCart] = useState(null);
    const [currentFloor, setCurrentFloor] = useState(null);
    const [area, setArea] = useState(null);
    const [result, setResult] = useState([]);
    const [final, setFinal] = useState(null);
    

    const dragOverHandler = (e, floor) => {
        e.preventDefault();
        e.target.style.outline = '#777 dashed 3px';
        e.target.style.outlineOffset = '-7px';
        setCurrentFloor(floor);       
      }
    
    const dragLeaveHandler = (e) => {
        e.target.style.outline = null;
        e.target.style.outlineOffset = null;
      }

    const dragEndHandler = (e) => {
        e.target.style.outline = null;
        e.target.style.outlineOffset = null;
    }

    const dragStartHandler = (e, cart, c) => {
        setCurrentCart(cart);
        setArea(c);
    } 
    
      const dropHandler = (e, cart) => {
        e.preventDefault();
        
        if (area === 'one') {
          setGameFloorState(gameFloorState.map(item => {
              if (item.id === currentFloor.id) {
              return {id: item.id, pic: currentCart.pic};
            } else {
              return item;
            }    
          })) 
        }
        if (area === 'two'){
          setGameFloorState(gameFloorState.map(item=>{
            if (item.id === cart.id) {
              return {id: item.id, pic: currentCart.pic}
            }
    
            if(item.id === currentCart.id) {
              return {id: item.id, pic: cart.pic}
            }
    
            else return item;
          }));      
        }  
        e.target.style.outline = null;
        e.target.style.outlineOffset = null;
      }

      useEffect(()=>{
        setResult(gameFloorState.map((item,index) => {
          if (item.pic === gameLevelState[index].pic) {
            return true;
          } else {
            return false;
          };
        }));
       },[gameFloorState]);
    
      useEffect(() => {
        let c = result.every(item => item === true)
        if (result.length > 0 && c ) {
          setFinal(true);
          setOpenWindow(true);
        }    
      }, [result]);

      //Rating
      const [gameRating, setGameRating] = useState([]);
      const [minutes, seconds] = useGameTimer(startGame, isStartGame, final);

      const sortRating = (a,b) => {
          if (a.time > b.time) {
            return 1;
          } else {
            return -1;
          }
      }

     const renderGameRating = gameRating.sort(sortRating).slice(0, 10);  
     
     const formatTime = (t) => {
       return t > 9 ? t : '0' + t;
      }

     useEffect(() => {
      if (final) {
        
        setGameRating([...gameRating, {
          id:1,
          title: `Рівень ${selectLevel.title}`,
          time: `${formatTime(minutes)}:${formatTime(seconds)}`          
        }])
      }      
     }, [final]);

    useEffect(()=>{
        
        let dataLocalStorage = JSON.parse(localStorage.getItem('gameRating'));
        dataLocalStorage && setGameRating(dataLocalStorage);    
       
     }, []);

    useEffect(() => {
      if (gameRating.length) {
        const s = JSON.stringify(gameRating);        
        localStorage.setItem('gameRating', s);
      }
        
     }, [gameRating]);

     
    //Settings

    const [timerRange, setTimerRange] = useState(null);
    const [language, setLanguage] = useState(null); 

    useEffect(()=> {
      !timerRange && setTimerRange(5);
      !language && setLanguage('ua');

      let c = localStorage.getItem('settings');
      let l = localStorage.getItem('lang');

      c && setTimerRange(c);
      l && setLanguage(l);
    }, []);

    useEffect(() => {
      if (timerRange) {
        localStorage.setItem('settings', timerRange);
      }        
    }, [timerRange]);
    
    useEffect (() => {
      if (language) {
        localStorage.setItem('lang', language);
      }
    }, [language]);

    const value = {
        openWindow,
        setOpenWindow,
        selectLevel,
        setSelectLevel,
        gameLevel,
        allUniquePicture,
        gameFloor,
        gameFloorState,
        gameLevelState,
        allUniquePictureState,
        dragOverHandler,
        dragLeaveHandler,
        dragEndHandler,
        dragStartHandler,
        dropHandler,
        final, setFinal,
        renderGameRating,
        startGame, isStartGame,
        minutes,seconds,
        timerRange, setTimerRange,
        language, setLanguage
    };

    return (
        <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
    )
}
export default Context;