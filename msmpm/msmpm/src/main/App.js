import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MyProperty from './MyProperty';
import Properties from './Properties';
import Template from './Template';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/home"> <Home/> </Route>
            
          <Route exact path="/properties/"> <Properties/> </Route>

          <Route exact path="/properties/myproperty/"> <MyProperty/> </Route>

          <Route exact path="/search/"> <Template/> </Route>

          <Route> <Redirect to = "/home"></Redirect> </Route>
            
        </Switch>
      </BrowserRouter>

    </div>
  );
}
export default App