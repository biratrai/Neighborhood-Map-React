import React, { Component } from 'react';
import Map from './Map.js';
import LocationList from './LocationList.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: Array(10).fill(null),
      isOpen: ""
    }
  }

  getListOfRestaurant = (response) => {
    this.setState(
      {
        locations : response.data.response.venues
      });
  }

  onToggleOpen = ( locationKey ) => {
    console.log("onToggleOpen "+locationKey)
    this.setState({
      isOpen : locationKey
    }); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Neighborhood Map</h1>
        </header>
        <div>
          <Map locationList = { this.state.locations }
          onToggleOpen = { this.onToggleOpen }
          isOpen = { this.state.isOpen }/>
          <LocationList onLoad={(locations) => this.getListOfRestaurant(locations)}/>
        </div>
      </div>
    );
  }
}

export default App;
