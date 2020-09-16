import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AppNavbar from './AppNavbar';
import EditHistory from './EditHistory';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/home">
              <AppNavbar/>
              <Leaderboard/>
              <EditHistory/>
          </Route>

          <Route path="/properties/"></Route>

          <Route>
            <Redirect to = "/home"></Redirect>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}
export default App