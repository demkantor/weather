import React from 'react';
import './Sidebar.css';

const Display = ({ currentLocation, setDisplaySearch }) => {
    return (
        <div className="display-wrapper">
            <div className="center mr-btm">
                <button 
                    className="search-btn"
                    onClick={setDisplaySearch}>
                        Search
                </button>
            </div>
            {currentLocation.consolidated_weather &&
            <>
                <h1 className="title center">Todays Weather for</h1>
                <h1 className="title center">{currentLocation.title}</h1>

                <div className="card-lg">
                <img src={`https://www.metaweather.com/static/img/weather/${currentLocation.consolidated_weather[0].weather_state_abbr}.svg`} 
                    alt={currentLocation.consolidated_weather[0].weather_state_name} 
                    className="card-img-lg" /> 
                <p className="subtitle">{currentLocation.consolidated_weather[0].weather_state_name}</p>
                <p className="subtitle">{"High "}{currentLocation.consolidated_weather[0].max_temp.toFixed(0)}</p>
                <p className="subtitle">{"Low "}{currentLocation.consolidated_weather[0].min_temp.toFixed(0)}</p>
                </div>
            </>
            }
            <div className="demkantor">
                <a href="https://davidkantor.com" className="subtitle">
                    demkantor
                </a>
            </div>
        </div>
    );
};

export default Display;
