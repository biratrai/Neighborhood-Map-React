import React, { Component } from 'react';
import Map from './Map.js';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ClipLoader } from 'react-spinners';
import { css } from 'react-emotion';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
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
        { this.props.isLoading &&  <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={80}
          color={'#123abc'}/>
        }
        { !this.props.isLoading && content } 
      </div>
    );
  }
}

export default App;
