import React, { Component } from 'react';
import Map from './Map.js';
import Search from './Search.js'
import logo from './logo.svg';
import Loader from 'react-loader-spinner'
import './App.css';

class App extends Component {

  render() {
    let content;
    if( this.props.hasError ){
      content = <div className="error" >{ this.props.errorMsg }</div>
    } else {
      content = <div>
        <section>
          {/* <Search 
            locationList= { this.props.locations }
            apiReturned = { this.props.apiReturned }
          /> */}
        </section>
        <Map locationList = { this.props.locations }/>
      </div>
    }
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Neighborhood Map</h1>
        </header> */}
        { this.props.isLoading &&  <Loader 
            type="Circles"
            color="#00BFFF"
            height="200"	
            width="200"
          />   
        }
        { content }
      </div>
    );
  }
}

export default App;
