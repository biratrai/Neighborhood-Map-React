import React, { Component } from 'react';
import { withGoogleMap,GoogleMap} from 'react-google-maps';
import MarkerWithInfoWindow from './MarkerWithInfoWindow'

class Map extends Component {
  renderMarker(venue, isOpen) {
    return(
      <MarkerWithInfoWindow 
        venue={venue} 
        isOpen = {isOpen}
        onToggleOpen = {this.props.onToggleOpen}
        key={venue.location.address}/>
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