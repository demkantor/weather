import React from 'react';

const Highlights = ({ currentLocation, day }) => {
    return (
        <div className="highlight-wrapper">
            <h1 className="title">Today's Highlights</h1>
            {currentLocation.consolidated_weather &&
                <div className="card-wrapper">
                    <div className="highlight-card">
                        <p>Wind</p>
                        <p>{currentLocation.consolidated_weather[day].wind_direction_compass}</p>
                        <p>{currentLocation.consolidated_weather[day].wind_speed.toFixed(0)}{" MPH"}</p>
                    </div>
                    <div className="highlight-card">
                        <p>Humidity</p>
                        <p>{currentLocation.consolidated_weather[day].humidity.toFixed(0)}{"%"}</p>
                    </div>
                    <div className="highlight-card">
                        <p>Sunrise / Sunset</p>
                        <p>{"sun rise: "}{currentLocation.sun_rise}</p>
                        <p>{"sun set: "}{currentLocation.sun_set}</p>
                    </div>
                    <div className="highlight-card">
                        <p>Air Pressure</p>
                        <p>{currentLocation.consolidated_weather[day].air_pressure.toFixed(0)}{" mb"}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Highlights;
