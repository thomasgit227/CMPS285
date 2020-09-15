import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import EditHistory from './EditHistory';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <div>
      <div>
        <AppNavbar/>
      </div>
      <div>
        <Leaderboard/>
        <EditHistory/>
      </div>
    </div>
  );
}

export default App;
