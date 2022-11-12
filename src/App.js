import React, {useState, useContext} from 'react';
import Menu from './components/Menu';
import FirstScreen from './components/FirstScreen';
import GameField from './components/GameField';
import Settings from './components/Settings';
import Rating from './components/Rating';
import NotFound from './components/NotFound';
import Modal from './components/Modal';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GameContext } from './components/Context';


function App() {
  const data = useContext(GameContext);
  // const [gameLevel, allUniquePicture,  gameFloor] = useArray(data.selectLevel.count);

  console.log(data.gameLevel);
  console.log(data.allUniquePicture);
  console.log(data.gameFloor);
  
  return ( 
    <>
      <section className="main">
        <Router>
          <div className = "gamefield">
              
                  <Switch>
                      <Route exact path = '/'>
                        <FirstScreen/></Route>
                      <Route path = '/settings' component = {Settings}  />
                      <Route path = '/rating' component = {Rating} />
                      <Route path = '/game'>
                        <GameField/>
                      </Route>
                      <Route component = {NotFound} />
                  </Switch>
              
          </div>
          <div className = "menu">
            
            <Menu/>
            
          </div>
          </Router>
      </section>
      <Modal 
          setSelectLevel = {data.setSelectLevel}        
      />
    </>
   );
}

export default App;
