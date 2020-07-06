import React, { Component } from 'react';
import './App.css';
import Search from './components/Sidebar/Search';
import Display from './components/Sidebar/Display';

class App extends Component {

  state = {
    displaySearch: true
  }

  setDisplaySearch = () => {
    this.setState({ displaySearch: !this.state.displaySearch });
  }

  render() {
    const { displaySearch } = this.state;

    return (
      <div className="app-wrapper">
        <div className="sidebar-container">
          {displaySearch 
          ?
            <Search 
              setDisplaySearch={this.setDisplaySearch} />
          :
            <Display
              setDisplaySearch={this.setDisplaySearch} />
          }
        </div>
      </div>
    )
  }
};

export default App;
