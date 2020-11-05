import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import BottomNav from './BottomNav.js';

function NavBar() {
    return (
        <>
            <nav className="navbar-container">
                <img className="logo-image" src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12985a91b23596370f7a81_logo-72-dc-7-f-0-f%402x.png"/>
                <div className="phone-container">
                    <img className="phone-icon" src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1297d1c3fecf36271c10a2_483947%403x.png"/>
                    <span><strong>+1 (800) 401-7716</strong></span>
                </div>
            </nav>
            <BottomNav />
        </>
    )
}

export default NavBar
