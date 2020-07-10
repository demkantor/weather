import React from 'react';

const FiveDay = ({ currentLocation, setDay, celsius }) => {

    return (
        <div className="five-day-wrapper">
            {currentLocation.consolidated_weather
            ?
            <>
                {currentLocation.consolidated_weather.map((day, i) => (
                    <div className="day-card" key={day.id} onClick={()=>setDay(i)}>
                        <p className="title">{day.applicable_date}</p>
                        <img src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} alt={day.weather_state_name} className="card-img" /> 
                        <div className="high-low">
                            {celsius
                            ?
                            <>
                                <p className="high">
                                    {day.max_temp.toFixed(0)}{"°"}
                                </p>
                                <p className="low">
                                    {day.min_temp.toFixed(0)}{"°"}
                                </p>
                            </>
                            :
                            <>
                                <p className="high">
                                    {(day.max_temp * 9 / 5 + 32).toFixed(0)}{"°"}
                                </p>
                                <p className="low">
                                    {(day.min_temp * 9 / 5 + 32).toFixed(0)}{"°"}
                                </p>
                            </>
                        }

                        </div>
                    </div>
                ))}
            </>
            :
            <>
                <div className="day-card">
                    monday
                </div>
                <div className="day-card">
                    tuesday
                </div>
                <div className="day-card">
                    wednesday
                </div>
                <div className="day-card">
                    thursday
                </div>
                <div className="day-card">
                    friday
                </div>
                <div className="day-card">
                    saturday
                </div>
            </>
            }
                
        </div>
    );
};

export default FiveDay;
