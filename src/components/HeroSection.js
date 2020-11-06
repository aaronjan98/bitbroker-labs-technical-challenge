import React from 'react'
import '../styles/HeroSection.css'
import '../styles/App.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <img className="hero-image" />

            <div className="benefits-bar">
                <span className="benefit-block">
                    <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a67d4bbc9fa4528f259a8_white-satalite.png" width="59" alt="Remote Roofing satalite" className="benefit-1-img benefit-img" />
                    <span className="benefits-text">Free Inspection</span>
                </span>
                <span className="benefit-block">
                    <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f1293b423e1bd4b2b89c278_2921571%403x.png" width="58" alt="Remote Roofing claim" className="benefit-2-img benefit-img"></img>
                    <span className="benefits-text">File A Claim</span>
                </span>
                <span className="benefit-block">
                    <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f12939072c6226dbd635684_69886%403x.png" width="57" alt="Replace or Repair Roof" class="benefit-3-img benefit-img"></img>
                    <span className="benefits-text">Replace or Repair Roof</span>
                </span>
            </div>
        </div>
    )
}

export default HeroSection
