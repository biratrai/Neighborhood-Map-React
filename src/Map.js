import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  renderMarker(location) {
    console.log('location renderMarker '+ location.lat +" "+ location.lng)
    return( 
      <Marker key={location.address}
      position={{ lat: location.lat , lng: location.lng }}
    />);
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      
       <GoogleMap
         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
         defaultZoom = { 13 }
        >
        {
          this.props.locationList.map((venues) => {
            if(venues != null){
              return this.renderMarker(venues.location);
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