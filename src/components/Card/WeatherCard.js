import React, { useState } from 'react';

import FiveDay from './FiveDay';
import Highlights from './Highlights';
import './Card.css';

const WeatherCard = ({ currentLocation }) => {

    const [day, setDay] = useState(0);

    return (
        <div className="weather-wrapper">
            <div className="deg-btn-container">
                <button className="deg-btn">C</button>
                <button className="deg-btn selected">F</button>
            </div>
            {currentLocation &&
                <h1 className="title">{currentLocation.title}</h1>
            }
            <div className="card-container">
                <FiveDay 
                    currentLocation={currentLocation}
                    setDay={setDay} />
                <Highlights 
                    currentLocation={currentLocation} 
                    day={day} />
            </div>
        </div>
    );
};

export default WeatherCard;
