import React, { useState } from 'react';

import './Sidebar.css';

const Search = ({ setDisplaySearch, fetchLocation, getWeather, searchList, pastSearch }) => {

    const [search, setSearch] = useState('');


    return (
        <div className="search-wrapper">
            <button className="exit-btn" onClick={setDisplaySearch}>
                <span className="material-icons">
                    highlight_off
                </span> 
            </button>
            <div className="search-container">
                <div className="search-section">
                    <div className="field">
                        <input 
                            type="text"
                            name="search"
                            value={search}
                            placeholder=""
                            onChange={(event)=>setSearch(event.target.value)}
                            className="search-field"  />
                        <label htmlFor="search" className="label">
                            City / Region / State / Country
                        </label>
                    </div>
                    <button 
                        className="search-btn"
                        onClick={()=>fetchLocation(search)}>
                            Search
                    </button>
                </div>
                <div className="search-list">
                    {searchList.map((locale, i) => (
                        <h2 key={i} className="list-item" onClick={()=>getWeather(locale.woeid)}>
                            {locale.title} 
                            <span className="material-icons">
                                navigate_next
                            </span> 
                        </h2>
                    ))}
                </div>
                <div className="search-list">
                    <h2 className="list-item">
                        something
                        <span className="material-icons">
                            navigate_next
                        </span> 
                    </h2>
                    <h2 className="list-item">something</h2>
                    <h2 className="list-item">something</h2>
                    <h2 className="list-item">something</h2>
                    <h2 className="list-item">something</h2>
                </div>
            </div>
        </div>
    );
};

export default Search;
