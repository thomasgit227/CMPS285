import React from 'react';
import './home_page.css';

import EditHistory from './EditHistory';
import Leaderboard from './Leaderboard';

export default function Home() {
    return (
        <div className = 'home'>
            <EditHistory/>
            <Leaderboard/>
        </div>
    );
}