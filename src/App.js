import React, { Component } from 'react';
import Map from './Map.js';
import Search from './Search.js'
import {getLocationList} from './LocationList.js'
import logo from './logo.svg';
import Loader from 'react-loader-spinner'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locations: [],
      apiReturned: false,
      hasError: false,
      errorMsg: "",
      isLoading: true
    }
  }

  getData = (response) => {
    if(response.data !== undefined){
      return this.setLocationData(response);
    } else {
      return this.setErrorData(response);
    }
  }

  setLocationData = (response) => {
    this.setState(
      {
        locations : response.data.response.venues,
        apiReturned : true,
        isLoading: false
      });
  }

  setErrorData = (error) => {
    this.setState(
      {
        hasError : true,
        errorMsg: error,
        isLoading: false
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
      content = <div>
        <section>
          <Search 
            locationList= { this.state.locations }
            apiReturned = { this.state.apiReturned }
          />
        </section>
        <Map locationList = {this.state.locations}/>
      </div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Neighborhood Map</h1>
        </header>
        {this.state.isLoading &&  <Loader 
            type="Circles"
            color="#00BFFF"
            height="200"	
            width="200"
          />   
        }
        {content}
      </div>
    );
  }
}

export default App;
