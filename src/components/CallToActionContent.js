import React from 'react';
import '../styles/CallToActionContent.css';
import PlacesAutocomplete from 'react-places-autocomplete';

function CallToActionContent() {
    const [address, setAddress] = React.useState('');

    const handleChange = value => {
        setAddress(value);
    }

    const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
        <div className="autocomplete-root">
            <input {...getInputProps({ placeholder: 'Your Address' })} />
            <div className="pac-container">
                {suggestions.map(suggestion => {
                    const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                    
                    return (
                        <div {...getSuggestionItemProps(suggestion, { className })}>
                            <span className="autocomplete-dropdown">{suggestion.description}</span>
                        </div>
                )})}
            </div>
        </div>
    );
    
    return (
        <>
            <div className="hero-div">
                <div className="welcome-message">
                    <h1>Free Roof Repair Inspection & Local Roofing Quote</h1>
                    <h2>Get your roof inspected remotely and connect with our trusted roofers</h2>
                </div>

                <form className="input-container" >
                    <div className="search-input">
                        <img className="home-image" src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png" />
                        
                        <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleChange}>
                            {renderFunc}
                        </PlacesAutocomplete>
                    </div>
                    <button class="inspection-btn">Get Inspection</button>
                </form>
            </div>
        </>
    )
}

export default CallToActionContent
