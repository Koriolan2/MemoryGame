import React, {useState} from 'react';
import Menu from './components/Menu';
import FirstScreen from './components/FirstScreen';
import GameField from './components/GameField';
import Settings from './components/Settings';
import Rating from './components/Rating';
import NotFound from './components/NotFound';
import Modal from './components/Modal';
import useArray from './hooks/useArray';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  const [openWindow, setOpenWindow] = useState(null);
  const [selectLevel, setSelectLevel] = useState({});
  
  const [arr, userLevel] = useArray(selectLevel.count);

  console.log(arr);
  console.log(userLevel);
  
  return ( 
    <>
      <section className="main">
        <Router>
          <div className = "gamefield">
              
                  <Switch>
                      <Route exact path = '/'>
                        <FirstScreen 
                            setOpenWindow = {setOpenWindow}
                            selectLevel = {selectLevel.title}
                        /></Route>
                      <Route path = '/settings' component = {Settings}  />
                      <Route path = '/rating' component = {Rating} />
                      <Route path = '/game'>
                        <GameField
                            selectLevel = {selectLevel}
                            arr = {arr}                            
                        />
                      </Route>
                      <Route component = {NotFound} />
                  </Switch>
              
          </div>
          <div className = "menu">
            
            <Menu
                setOpenWindow = {setOpenWindow}/>
            
          </div>
          </Router>
      </section>
      <Modal 
          openWindow = {openWindow} 
          setOpenWindow = {setOpenWindow}  
          setSelectLevel = {setSelectLevel}        
      />
    </>
   );
}

export default App;
