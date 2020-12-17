import React from 'react';
import './home_page.css';
import {
    Row,
    Col,
} from 'reactstrap';
import EditHistory from './EditHistory';
import Leaderboard from './Leaderboard';
import NoAccess from '../main_components/NoAccess';

export default function Home() {
    return (
        <div className = 'home'>
            {
            sessionStorage.getItem("isLoggedIn") !== "true" //TODO check for role
            ?
            <NoAccess/>
            :
            <Row>
                <Col>
                    <Leaderboard/>
                </Col>
                <Col>
                    <EditHistory/>
                </Col>
            </Row>
            }
        </div>
    );
}