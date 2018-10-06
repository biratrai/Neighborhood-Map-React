import React, { Component } from 'react';
import Map from './Map.js';
import LocationList from './LocationList.js'
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
    // 'Authorization': 'Bearer gr2wwg-XsG_mpTRK3PcgsHPaPPmeSa-r9JKLq3HKJSIJ5hvojQsZjxhgqJos4NJND6Tu9LcKXeoAwRdnu3VBX6f5Shs06FuRMKCM13UD1pFXIF8roc_Ypzy8LWqtW3Yx'
  },
  params: {
    query: 'restaurant',
    near: 'manhattan',
    limit: 10,
    client_id: 'HBYEVO4EIPOICOXSJNABR3PVXDNTCUC4FSM220H1CEVHYGID',
    client_secret : 'BHNP3EE1OS4TTJTD5HFOQHI4EOQCTNIGA01QJJYBTKZ0NIDH',
    v : '21120609'
  }
};

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
  
  // componentDidMount() {
  //   axios.get('https://api.foursquare.com/v2/venues/search', config)
  //   .then(response => {
  //     console.log(response);
  //     this.getListOfRestaurant(response);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //     });
  // }

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
