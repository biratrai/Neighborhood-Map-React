import React from 'react';
import PropTypes from 'prop-types';

// Stateless functional Component
const MarkerWithInfoWindow = (props) => {
  return(
    <Marker 
      position={{ lat: props.venue.location.lat, lng: props.venue.location.lng }}
      onClick={ () => props.onToggleOpen(props.venue.id)}
      animation= { props.currentSelected === props.venue.id && props.shouldAnimate? props.animation: null }
    >
      { 
        (props.currentSelected === props.venue.id) && <InfoWindow onCloseClick={ props.onToggleOpen }>
        <div onClick={() => props.onToggleOpen("")}>
          <h3>{ props.venue.name? props.venue.name : "Name Unavailable" }</h3>
          <h5>{ props.venue.categories[0]? props.venue.categories[0].name : "Category unavailable"}</h5>
          <p>{ props.venue.location.address? props.venue.location.address: "Address unavailable" }</p>
       </div>
      </InfoWindow>}
    </Marker>
  );
};

const {
  Marker,
  InfoWindow,
} = require("react-google-maps");

MarkerWithInfoWindow.propTypes = {
  venue: PropTypes.object.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  shouldAnimate: PropTypes.bool.isRequired,
  animation: PropTypes.number.isRequired,
};
export default MarkerWithInfoWindow;