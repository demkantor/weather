import React from 'react';

const Highlights = ({ currentLocation, day }) => {
    return (
        <div className="highlight-wrapper">
            {currentLocation.consolidated_weather &&
            <>
                
                <h1 className="title">
                    {day === 0
                    ?
                        "Today's Highlights"
                    :
                        `${new Date(currentLocation.consolidated_weather[day].applicable_date).toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' })}'s Highlights`
                    }
                </h1>
                <div className="card-wrapper">
                    <div className="highlight-card">
                        <h3 className="card-item">Wind</h3>
                        <div className="card-item">
                            <p className="card-item bold">
                                {currentLocation.consolidated_weather[day].wind_speed.toFixed(0)}
                                <span className="sml">
                                    {" MPH"}
                                </span>
                            </p> 
                        </div>
                        <p className="card-item fix-align">
                            <span 
                                className="material-icons mr-rgt circle" 
                                style={{transform: `rotate(${currentLocation.consolidated_weather[day].wind_direction -90}deg)`}}>
                                arrow_right_alt
                            </span> 
                            {currentLocation.consolidated_weather[day].wind_direction_compass}
                        </p>
                    </div>
                    <div className="highlight-card">
                        <h3 className="card-item">Humidity</h3>
                        <div className="card-item">
                            <p className="card-item bold">
                                {currentLocation.consolidated_weather[day].humidity.toFixed(0)}
                                <span className="sml">
                                    {" %"}
                                </span>
                            </p> 
                        </div>
                        <progress value={currentLocation.consolidated_weather[day].humidity.toFixed(0)} max='100'></progress>
                    </div>
                    <div className="highlight-card">
                        <p>Sunrise / Sunset</p>
                        <p>{(currentLocation.sun_rise).substr(11,5)}{" am"}</p>
                        <hr/>
                        <p className="negative">{currentLocation.sun_set.substr(11,5)}{" pm"}</p>
                    </div>
                    <div className="highlight-card">
                        <h3 className="card-item">Air Pressure</h3>
                        <div className="card-item">
                            <p className="card-item bold">
                                {currentLocation.consolidated_weather[day].air_pressure.toFixed(0)}
                                <span className="sml">
                                    {" mb"}
                                </span>
                            </p> 
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default Highlights;
