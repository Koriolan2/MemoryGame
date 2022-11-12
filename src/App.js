import React, {useEffect, useContext} from 'react';
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
 
  return ( 
    <>
      <section className="main">
        <Router>
          <div className = "gamefield">
              
                  <Switch>
                      <Route exact path = '/'>
                        <FirstScreen/>
                      </Route>
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
      <Modal/>
    </>
   );
}

export default App;
