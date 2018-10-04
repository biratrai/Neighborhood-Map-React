import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  renderMarker(location) {
    console.log('location renderMarker '+ location.lat)
    return( 
      <Marker
      position={{ lat: location.lat, lng: location.lng }}
    />);
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
       <GoogleMap
         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
         defaultZoom = { 13 }
        >
        const locationList = this.props.locationList;
        console.log("locationList -> "+ locationList)
        locationList.map((venues) => 
          {/* this.renderMarker(venues.location); */}
          console.log('location renderMarker '+ venues.location.lat)
          )
        <Marker
          position={{ lat: 40.756795, lng: -73.954298 }}
        />
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