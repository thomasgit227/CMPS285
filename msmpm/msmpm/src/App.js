import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home_page/Home';
import MyProperty from './selected_property/MyProperty';
import Properties from './all_properties/Properties';
import Template from './main_components/Template';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/home"> <Home/> </Route>
            
          <Route exact path="/properties/"> <Properties/> </Route>

          <Route path="/properties/myproperty/"> <MyProperty/> </Route>

          <Route exact path="/search/"> <Template/> </Route>

          <Route> <Redirect to = "/home"> </Redirect> </Route>
            
        </Switch>
      </BrowserRouter>

    </div>
  );
}
export default App