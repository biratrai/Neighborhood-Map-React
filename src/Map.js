import React, { Component } from 'react';
import { withGoogleMap,GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MarkerWithInfoWindow from './MarkerWithInfoWindow'

class Map extends Component {
  renderMarker(venue, isOpen) {
    console.log('location renderMarker '+ venue.location.lat +" "+ venue.location.lng)
    // console.log("this.props.isOpen " + this.props.isOpen)
    // console.log("venue.location.address " + venue.location.address)
    return(
      // <MarkerWithInfoWindow 
      //   venue={venue} 
      //   isOpen = {isOpen}
      //   onToggleOpen = {onToggleOpen}
      //   key={venue.location.address}/>
      <Marker 
      position={{ lat: venue.location.lat, lng: venue.location.lng }}
      onClick={ () => this.props.onToggleOpen(venue.location.address)}
    >
      { 
        this.props.isOpen === venue.location.address && <InfoWindow onCloseClick={this.props.onToggleOpen("")}>
      </InfoWindow>}
    </Marker>
    ); 
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      
       <GoogleMap
         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
         defaultZoom = { 13 }
        >
        {
          this.props.locationList.map((venue) => {
            if(venue != null){
              return this.renderMarker(venue, this.props.isOpen);
            }
          })
        }
       </GoogleMap>
    ));

    return(
       <div>
         <GoogleMapExample
           containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
         />
       </div>
    );
 
    }
};

export default Map;