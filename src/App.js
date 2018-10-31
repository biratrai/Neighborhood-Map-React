import React, { Component } from 'react';
import Map from './Map.js';
import Loader from 'react-loader-spinner'
import './App.css';
import Typography from '@material-ui/core/Typography';

class App extends Component {

  render() {
    let content;
    if( this.props.hasError ){
      if (this.props.errorMsg.response) {
        content = <div className="error" >
        <h3>{ this.props.errorMsg.message }</h3>
          <p>{ this.props.errorMsg.response.data.meta.errorDetail }</p> 
          <p>{ "Please search again!" }</p>
        </div>
      } else if (this.props.errorMsg.request) {
        content = <Typography variant="h5" color="error">
                    "Couldn't fetch data. Please try again later"
                  </Typography>
          
      }
    } else {
      content = <div>
        <Map locationList = { this.props.locations } 
          shouldAnimate = { this.props.shouldAnimate } 
          currentSelected={ this.props.currentSelected }
          onToggleOpen={ this.props.onToggleOpen }
          geometry={ this.props.geometry }
          />
      </div>
    }
    return (
      <div className="App">
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
