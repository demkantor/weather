import React from 'react';

import FiveDay from './FiveDay';
import Highlights from './Highlights';
import './Card.css';

const WeatherCard = ({ currentLocation }) => {
    return (
        <div className="weather-wrapper">
            <div className="deg-btn-container">
                <button className="deg-btn">C</button>
                <button className="deg-btn selected">F</button>
            </div>
            <div className="card-container">
                <FiveDay 
                    currentLocation={currentLocation} />
                <Highlights 
                    currentLocation={currentLocation} />
            </div>
        </div>
    );
};

export default WeatherCard;
