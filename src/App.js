import React, { Component } from 'react';
import axios from 'axios'

import Search from './components/Sidebar/Search';
import Display from './components/Sidebar/Display';
import WeatherCard from './components/Card/WeatherCard';
import './App.css';

class App extends Component {

  state = {
    displaySearch: true,
    errors: '',
    searchList: [],
    pastSearch: [],
    currentLocation: []
  };

  getWeather = async ({ locale }) => {
    console.log(locale.title);
    const location = await axios.get(`/weather/${locale.woeid}`);
    console.log(location.data.data)
    await this.setState({ currentLocation: location.data.data });
    await this.setState({ pastSearch: [...this.state.pastSearch, locale ]});
    await this.setState({ searchList: [] });
  };

  setDisplaySearch = () => {
    console.log('yo')
    this.setState({ displaySearch: !this.state.displaySearch });
  };

  fetchLocation = async (search) => {
    console.log(search);
    const searchList = await axios.get(`/weather/search/${search}`);
    console.log(searchList.data.data)
    if(searchList.data.data.length === 0) {
      this.setState({ errors: 'Sorry, nothing found in your search '});
    } else {
      this.setState({ searchList: searchList.data.data });
    };
  };

  render() {
    const { displaySearch, searchList, pastSearch, currentLocation } = this.state;

    return (
      <div className="app-wrapper">
        <div className="sidebar-container">
          {displaySearch 
          ?
            <Search 
              setDisplaySearch={this.setDisplaySearch}
              fetchLocation={this.fetchLocation}
              getWeather={this.getWeather}
              searchList={searchList} 
              pastSearch={pastSearch} />
          :
            <Display
              setDisplaySearch={this.setDisplaySearch}
              currentLocation={currentLocation} />
          }
        </div>
        <WeatherCard 
          currentLocation={currentLocation} />
      </div>
    )
  }
};

export default App;
