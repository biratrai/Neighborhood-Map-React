
import React from 'react';
import { withGoogleMap,GoogleMap} from 'react-google-maps';

const GoogleMapBox = withScriptjs(withGoogleMap(props => {
    return(
  <GoogleMap
    defaultCenter = { { lat: props.geometry.lat, lng: props.geometry.lng } }
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
)}));

export default GoogleMap;