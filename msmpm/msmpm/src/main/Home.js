import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import EditHistory from './EditHistory';
import Leaderboard from './Leaderboard';

export default function Home() {
    return (
        <div className = 'home'>
            <AppNavbar/>
            <EditHistory/>
            <Leaderboard/>
        </div>
    );
}