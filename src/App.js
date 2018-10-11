import React, { Component } from 'react';
import Map from './Map.js';
import {getLocationList} from './LocationList.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: Array(10).fill(null),
    }
  }
  getListOfRestaurant = (locations) => {
    this.setState(
      {
        locations : locations.data.response.venues
      });
  }

  showErrorScreen() {
    console.log("error error");
  }
  componentDidMount(){
    getLocationList(this.getListOfRestaurant)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Neighborhood Map</h1>
        </header>
        <div>
          <Map locationList = {this.state.locations}/>
          {/* <LocationList onLoad={(locations) => this.getListOfRestaurant(locations)}/> */}
        </div>
      </div>
    );
  }
}

export default App;
