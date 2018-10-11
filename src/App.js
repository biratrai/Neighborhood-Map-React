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
      hasError: false,
      errorMsg: ""
    }
  }

  getData = (response) => {
    if(response.data !== undefined){
      return this.setLocationData(response);
    } else {
      return this.setErrorData(response);
    }
  }

  setLocationData = (locations) => {
    this.setState(
      {
        locations : locations.data.response.venues
      });
  }

  setErrorData = (error) => {
    this.setState(
      {
        hasError : true,
        errorMsg: error
      });
  }

  componentDidMount(){
    getLocationList(this.getData)
  }

  render() {
    let content;
    if(this.state.hasError){
      content = <div className="error" >{this.state.errorMsg}</div>
    } else {
      content = <Map locationList = {this.state.locations}/>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Neighborhood Map</h1>
        </header>
        
        <div>
          {content}
        </div>
      </div>
    );
  }
}

export default App;
