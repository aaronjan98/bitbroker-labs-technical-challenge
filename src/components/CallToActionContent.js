import React from 'react'
import '../styles/CallToActionContent.css'

function CallToActionContent() {
    return (
        <div>
            <h1>Free Roof Repair Inspection & Local Roofing Quote</h1>
            <div>Get your roof inspected remotely and connect with our trusted roofers</div>
            <div className="input-container" >
                <img className="home-image" />
                <input placeholder="Enter Your Address" />
                <button>Get Inspection</button>
            </div>

            <div className="benefits-bar">
                <span className="benefit-1">
                    <img />
                    <span>Free Inspection</span>
                </span>
                <span className="benefit-2">
                    <img />
                    <span>File A Claim</span>
                </span>
                <span className="benefit-3">
                    <img />
                    <span>Replace or Repair Roof</span>
                </span>
            </div>
        </div>
    )
}

export default CallToActionContent
