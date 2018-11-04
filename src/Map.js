import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerWithInfoWindow from './MarkerWithInfoWindow'

class Map extends Component {

  // Function to get the MarkerWithInfoWindow component
  renderMarker(venue, shouldAnimate, currentSelected, isOpen, onToggleOpen ) {
    return(
      <MarkerWithInfoWindow 
        venue={ venue } 
        // isOpen = { isOpen }
        onToggleOpen = { onToggleOpen }
        key={ venue.location.address }
        shouldAnimate={ shouldAnimate }
        animation={ window.google.maps.Animation.BOUNCE }
        currentSelected= { currentSelected }/>
    ); 
  }

  render() {  
    return(
         <GoogleMapBox
           containerElement={ <div style={{ height: `500px`}} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
           locationList={ this.props.locationList }
           shouldAnimate={ this.props.shouldAnimate }
           currentSelected={ this.props.currentSelected }
           renderMarker={ this.renderMarker }
           onToggleOpen={ this.props.onToggleOpen }
           geometry={ this.props.geometry }
         >
         </GoogleMapBox>
       
    );
 }
};

// Function to get the GoogleMap Component
const GoogleMapBox = withGoogleMap(props => (
  <GoogleMap
    center = { { lat: props.geometry.lat, lng: props.geometry.lng } }
    defaultZoom = { 13 }
    aria-label={ "Google Map"}
   >
   {
     props.locationList.map((venue) => {
       if(venue != null){
        return props.renderMarker(venue, props.shouldAnimate, props.currentSelected, props.isOpen, props.onToggleOpen);
       } else {
        return null;
       }
     })
   }
  </GoogleMap>
));

export default Map;