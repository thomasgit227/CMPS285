import React from 'react';
import './home_page.css';
import {
    Row,
    Col,
} from 'reactstrap';
import EditHistory from './EditHistory';
import Leaderboard from './Leaderboard';
import Test from './Test';

export default function Home() {
    return (
        <div className = 'home'>
            <Row>
                <Col>
                    <Leaderboard/>
                </Col>
                <Col>
                    <EditHistory/>
                </Col>
            </Row>
        </div>
    );
}