import React, { Component } from 'react';
import { withGoogleMap,GoogleMap} from 'react-google-maps';
import MarkerWithInfoWindow from './MarkerWithInfoWindow'

class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: ""
    }
  }

  onToggleOpen = ( locationKey ) => {
    this.setState({
      isOpen : locationKey
    }); 
  }

  renderMarker(venue, shouldAnimate) {
    return(
      <MarkerWithInfoWindow 
        venue={venue} 
        isOpen = {this.state.isOpen}
        onToggleOpen = {this.onToggleOpen}
        key={venue.location.address}
        shouldAnimate={shouldAnimate}
        animation={window.google.maps.Animation.BOUNCE}/>
    ); 
  }

  render() {
    const GoogleMapBox = withGoogleMap(props => (
      
       <GoogleMap
         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
         defaultZoom = { 13 }
        >
        {
          this.props.locationList.map((venue) => {
            if(venue != null){
              return this.renderMarker(venue, this.props.shouldAnimate);
            } else {
              return null;
            }
          })
        }
       </GoogleMap>
    ));

    return(
       <div>
         <GoogleMapBox
           containerElement={ <div style={{ height: `500px`}} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
         >

         </GoogleMapBox>
        </div>
    );
 
    }
};

export default Map;