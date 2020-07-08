import React, { Component } from 'react';
import { fetchData } from './api';

import Search from './components/Sidebar/Search';
import Display from './components/Sidebar/Display';
import WeatherCard from './components/Card/WeatherCard';
import './App.css';

class App extends Component {

  state = {
    displaySearch: true,
    data: {}
  };

  setDisplaySearch = () => {
    this.setState({ displaySearch: !this.state.displaySearch });
  };

  fetchLocation = async (search) => {
    console.log(search);
    const data = await fetchData(search);
    this.setState({ data, search });
  };

  render() {
    const { displaySearch, data } = this.state;

    return (
      <div className="app-wrapper">
        <div className="sidebar-container">
          {displaySearch 
          ?
            <Search 
              setDisplaySearch={this.setDisplaySearch}
              fetchLocation={this.fetchLocation}
              data={data} />
          :
            <Display
              setDisplaySearch={this.setDisplaySearch}
              data={data} />
          }
        </div>
        <WeatherCard />
      </div>
    )
  }
};

export default App;
