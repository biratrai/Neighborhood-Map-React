import React, { Component } from 'react';
const {
  Marker,
  InfoWindow,
} = require("react-google-maps");

class MarkerWithInfoWindow extends Component {

render(){
  // console.log(this.props.venue.categories[0].icon.prefix+32+this.props.venue.categories[0].icon.suffix)
  console.log("render "+ this.props.venue.categories.name)
  return(
    <Marker 
      position={{ lat: this.props.venue.location.lat, lng: this.props.venue.location.lng }}
      onClick={ () => this.props.onToggleOpen(this.props.venue.id)}
      animation= { this.props.currentSelected === this.props.venue.id && this.props.shouldAnimate? this.props.animation: null }
    >
      { 
        (this.props.currentSelected === this.props.venue.id) && <InfoWindow >
        <div onClick={() => this.props.onToggleOpen("")}>
          <h3>{ this.props.venue.name }</h3>
          <h5>{ this.props.venue.categories[0].name }</h5>
          <p>{ this.props.venue.location.address }</p>
       </div>
      </InfoWindow>}
    </Marker>
  );
}
    
};
export default MarkerWithInfoWindow;