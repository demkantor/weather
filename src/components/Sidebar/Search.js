import React, { useState } from 'react';
import './Sidebar.css';

const Search = ({ setDisplaySearch }) => {
    const [search, setSearch] = useState('');

    const fetchQuery = () => {
        console.log(search)
    };

    return (
        <div className="search-wrapper">
            <button className="exit-btn" onClick={setDisplaySearch}>
                <span className="material-icons">
                    highlight_off
                </span> 
            </button>
            <div className="search-section">
                <div className="field">
                    <input 
                        type="text"
                        name="search"
                        value={search}
                        onChange={(event)=>setSearch(event.target.value)}
                        className="search-field"  />
                    <label htmlFor="search" className="label">
                        City / Region / State / Country
                    </label>
                </div>
                <button 
                    className="search-btn"
                    onClick={fetchQuery}>
                        Search
                </button>
            </div>
            <div className="past-search">

            </div>
            
        </div>
    );
};

export default Search;
