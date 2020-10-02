import React from 'react';
import './Login.css';
import AppNavbar from '../main_components/AppNavbar';
import LoginForm from './LoginForm';

export default function Login() {
    return (
        <div>
            <AppNavbar/>
            <LoginForm/>
        </div>
    );
}