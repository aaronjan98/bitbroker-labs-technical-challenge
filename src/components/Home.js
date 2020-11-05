import React from 'react'
import '../styles/App.css'
import '../styles/Home.css'
import HeroSection from './HeroSection.js'
import NavBar from './Navbar.js'
import CallToActionContent from './CallToActionContent.js'

function Home() {
    return (
        <>
            <HeroSection />
            <div className="main-content">
                <div className="main-section">
                    <NavBar />
                    <CallToActionContent />
                </div>
            </div>
        </>
    )
}

export default Home;