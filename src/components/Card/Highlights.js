import React from 'react';

const Highlights = () => {
    return (
        <div className="highlight-wrapper">
            <h1 className="title">Today's Highlights</h1>
            <div className="card-wrapper">
                <div className="highlight-card">
                    <p>Wind</p>
                </div>
                <div className="highlight-card">
                    <p>Humidity</p>
                </div>
                <div className="highlight-card">
                    <p>Sunrise / Sunset</p>
                </div>
                <div className="highlight-card">
                    <p>Air Pressure</p>
                </div>
            </div>
        </div>
    );
};

export default Highlights;
