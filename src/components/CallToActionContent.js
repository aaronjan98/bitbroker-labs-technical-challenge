import React from 'react'
import '../styles/CallToActionContent.css'

function CallToActionContent() {
    return (
        <>
            <div className="hero-div">
                <div className="welcome-message">
                    <h1>Free Roof Repair Inspection & Local Roofing Quote</h1>
                    <h2>Get your roof inspected remotely and connect with our trusted roofers</h2>
                </div>

                <form className="input-container" >
                    <img className="home-image" src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png" />
                    <input placeholder="Enter Your Address" />
                    <button>Get Inspection</button>
                </form>
            </div>

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
        </>
    )
}

export default CallToActionContent
