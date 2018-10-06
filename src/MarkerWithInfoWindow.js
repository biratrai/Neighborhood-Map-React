import React, { Component } from 'react';
const {
  Marker,
  InfoWindow,
} = require("react-google-maps");

class MarkerWithInfoWindow extends Component {

render(){
  console.log(this.props.venue.categories[0].icon.prefix+32+this.props.venue.categories[0].icon.suffix)
  return(
        <Marker 
      position={{ lat: this.props.venue.location.lat, lng: this.props.venue.location.lng }}
      onClick={ () => this.props.onToggleOpen(this.props.venue.location.address)}
    >
      { 
        this.props.isOpen === this.props.venue.location.address && <InfoWindow >
        <div onClick={() => this.props.onToggleOpen("")}>
          <div>{this.props.venue.name}</div>
          <div>{this.props.venue.location.address}</div>
       </div>
      </InfoWindow>}
    </Marker>
  );
}
    
};
export default MarkerWithInfoWindow;