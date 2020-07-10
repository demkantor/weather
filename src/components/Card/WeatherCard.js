import React, { useState } from 'react';

import FiveDay from './FiveDay';
import Highlights from './Highlights';
import './Card.css';

const WeatherCard = ({ currentLocation, celsius, degrees }) => {

    const [day, setDay] = useState(0);

    return (
        <div className="weather-wrapper">
            <div className="deg-btn-container">
                <button 
                    className={celsius ? "deg-btn selected" : "deg-btn"}
                    onClick={()=>degrees(true)}>
                        C °
                </button>
                <button 
                    className={celsius ? "deg-btn" : "deg-btn selected"}
                    onClick={()=>degrees(false)}>   
                        F °
                </button>
            </div>
            {currentLocation &&
                <h1 className="title">{currentLocation.title}</h1>
            }
            <div className="card-container">
                <FiveDay 
                    currentLocation={currentLocation}
                    celsius={celsius}
                    setDay={setDay} />
                <Highlights 
                    currentLocation={currentLocation} 
                    day={day} />
            </div>
        </div>
    );
};

export default WeatherCard;
