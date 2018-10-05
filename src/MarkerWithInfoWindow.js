import React, { Component } from 'react';
const {
  Marker,
  InfoWindow,
} = require("react-google-maps");

class MarkerWithInfoWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  onToggleOpen = ( isOpen ) => {
    console.log("onToggleOpen "+isOpen)
    this.setState({
      isOpen : !isOpen
    }); 
  }

render(){
  return(
  <Marker 
    position={{ lat: this.props.venue.location.lat, lng: this.props.venue.location.lng }}
    onClick={ this.onToggleOpen}
  >
    {this.state.isOpen && <InfoWindow onCloseClick={this.props.onToggleOpen}>
    </InfoWindow>}
  </Marker>
  );
}
    
};
export default MarkerWithInfoWindow;