import React, { Component } from 'react';
import axios from 'axios'

import Search from './components/Sidebar/Search';
import Display from './components/Sidebar/Display';
import WeatherCard from './components/Card/WeatherCard';
import './App.css';

class App extends Component {

  state = {
    displaySearch: false,
    errors: '',
    searchList: [],
    pastSearch: [],
    currentLocation: []
  };

  // fetch weather on app load by geoloaction or saved in local storage
  componentDidMount = async () => {
    const items = await this.getLocal();
    if(items.length  > 0) {
      this.setState({ pastSearch: items });
      const locale = items[0];
      this.getWeather({ locale });
    } else {
      this.getGeoLocation();
    };
  };

  // if unable to get device location then send minnepolis as default
  error = () => {
    const locale = { title: 'Minneapolis', woeid: 2452078}
    this.getWeather({ locale });
  };

  // gets weather location via user search input
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

  // attempts to get location from user device
  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.position, this.error);
    } else {
      const locale = { title: 'Minneapolis', woeid: 2452078}
      this.getWeather({ locale });
    }
  };

  // fetches local storage 
  getLocal = () => {
    return localStorage.getItem("weather-list")
    ? JSON.parse(localStorage.getItem("weather-list"))
    : [];
  };
  
  // gets weather by ID
  getWeather = async ({ locale }) => {
    console.log(locale.title);
    const location = await axios.get(`/weather/${locale.woeid}`);
    await this.setState({ currentLocation: location.data.data });
    const searchedLocation = { title: location.data.data.title, woeid: location.data.data.woeid}
    this.setLocal(searchedLocation);
  };

  // if able to get user location by device then set as default
  position = (location) => {
    console.log('user location:', location);
  };

  // changes sidebar from daily weather to search location
  setDisplaySearch = () => {
    this.setState({ displaySearch: !this.state.displaySearch });
  };

  // sets local storage list 
  setLocal = async (locale) => {
    let localList = this.getLocal();
    console.log(localList)
    if(localList.length >= 5) {
      if(localList.some(item => item.title === locale.title)){
        console.log('more than 5 and same search!');
      } else {
        localList.shift()
        localList.push(locale);
        localStorage.setItem("weather-list", JSON.stringify(localList));
        this.setState({ pastSearch: localList });
      }
    } else if (localList.some(item => item.title === locale.title)){
      console.log('already in it!');
    } else {
      localList.push(locale);
      localStorage.setItem("weather-list", JSON.stringify(localList));
      this.setState({ pastSearch: localList });
    };
    await this.setState({ searchList: [] });
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
