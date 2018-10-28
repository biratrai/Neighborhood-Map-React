import React, { Component } from 'react';
import { withGoogleMap,GoogleMap} from 'react-google-maps';
import MarkerWithInfoWindow from './MarkerWithInfoWindow'

const GoogleMapBox = withGoogleMap(props => (
      
  <GoogleMap
    defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
    defaultZoom = { 13 }
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

  renderMarker(venue, shouldAnimate, currentSelected, isOpen, onToggleOpen ) {
    return(
      <MarkerWithInfoWindow 
        venue={ venue } 
        isOpen = { isOpen }
        onToggleOpen = { onToggleOpen }
        key={ venue.location.address }
        shouldAnimate={ shouldAnimate }
        animation={ window.google.maps.Animation.BOUNCE }
        currentSelected= { currentSelected }/>
    ); 
  }

  render() {
    return(
       <div>
         <GoogleMapBox
           containerElement={ <div style={{ height: `500px`}} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
           locationList={ this.props.locationList }
           shouldAnimate={ this.props.shouldAnimate }
           currentSelected={ this.props.currentSelected }
           renderMarker={ this.renderMarker }
           isOpen={ this.state.isOpen }
           onToggleOpen={ this.onToggleOpen }
         >

         </GoogleMapBox>
        </div>
    );
 
    }
};

export default Map;