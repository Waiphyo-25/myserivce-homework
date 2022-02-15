import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Price from './Pages/Price/Price';
import Home from './Pages/Home/Home';
import Carrier from './Pages/Carrier/Carrier';




function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
        <Route exact path="/Price" component={Price}/>
        <Route exact ="/Carrier" component={Carrier}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
