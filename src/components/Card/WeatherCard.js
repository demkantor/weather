import React from 'react';

import FiveDay from './FiveDay';
import Highlights from './Highlights';
import './Card.css';

const WeatherCard = ({ currentLocation }) => {
    return (
        <div className="weather-wrapper">
            <h1 className="title">
                here is your weather!
            </h1>
            <div className="deg-btn-container">
                <button className="deg-btn">C</button>
                <button className="deg-btn">F</button>
            </div>
            <div className="card-container">
                <FiveDay />
                <Highlights />
            </div>
        </div>
    );
};

export default WeatherCard;
