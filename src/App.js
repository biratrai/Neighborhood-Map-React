import React, { Component } from 'react';
import Map from './Map.js';
import Search from './Search.js'
import LocationList from './LocationList.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: [],
      apiReturned: false,
    }
  }

  getListOfRestaurant = (response) => {
    this.setState(
      {
        locations : response.data.response.venues,
        apiReturned : true
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Neighborhood Map</h1>
        </header>
        <section>
          <Search 
            locationList= { this.state.locations }
            apiReturned = { this.state.apiReturned }
          />
        </section>
        <div>
          <Map locationList = { this.state.locations }/>
          <LocationList onLoad={(locations) => this.getListOfRestaurant(locations)}/>
        </div>
      </div>
    );
  }
}

export default App;
