import React from 'react';
import logo from '../assets/logo.png';
import '../App.css';

function NavBar() {
    return (
        <div className="nav-bar">
            <img src={logo} alt="logo" className="logo" />
        </div>
    );
}

export default NavBar;