import React from 'react';
import Navbar from './components/Navbar';
import {Route, BrowserRouter, Router} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Friendsmode from './components/Friendsmode';
import Lovemode from './components/Lovemode';
import Aboutme from './components/Aboutme';


let App = (props) =>{
  return(
    <BrowserRouter>
    <div className='wrapper flex' >
      <div><Navbar /></div>
      <div>
          <Route path='/main' component={Main} />
          <Route path='/friends' component={ Friendsmode } 
          desires={props.wishs}/>
          <Route path='/love' component={Lovemode} />
          <Route path='/about' component={Aboutme} />
      </div>
      <div></div>
    </div>
    </BrowserRouter>
  );
};

export default App;
