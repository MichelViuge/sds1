import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './styles.css'
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="main-header">
        <Logo/>
        <div className="logo-text">
            <Link to="/">
                <span className="logo-text-1">Big Game </span>
                <span className="logo-text-2">Survey</span>
            </Link>
        </div>
    </header>
);

export default Header;