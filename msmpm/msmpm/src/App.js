import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './CSS/App.css';
import Home from './home_page/Home';
import MyProperty from './selected_property/MyProperty';
import Properties from './all_properties/Properties';
import Template from './main_components/Template';
import Login from './login/Login';
import Test from './home_page/Test'
import AppNavbar from './main_components/AppNavbar';

function App() {
  return (
    <div className = 'main'>
      <BrowserRouter>
        
        <AppNavbar/>

        <Switch>

          <Route path="/home"> <Home/> </Route>
            
          <Route exact path="/properties/"> <Properties/> </Route>

          <Route path="/properties/myproperty/:id"> <MyProperty/> </Route>

          <Route exact path="/search/"> <Template/> </Route>

          <Route exact path="/login/"> <Login/> </Route>

          <Route exact path="/test/"> <Test/> </Route>

          <Route> <Redirect to = "/home"> </Redirect> </Route>
            
        </Switch>
      </BrowserRouter>

    </div>
  );
}
export default App