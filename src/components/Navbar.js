import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function NavBar() {
    return (
        <>
            <nav className="navbar-container">
                <img className="logo-image"/>
                <div>
                    <img className="phone-icon" />
                    <span>+1 (800) 401-7716</span>
                </div>
            </nav>
        </>
    )
}

export default NavBar
