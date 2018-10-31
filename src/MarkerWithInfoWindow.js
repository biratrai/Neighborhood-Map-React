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
        (props.currentSelected === props.venue.id) && <InfoWindow >
        <div onClick={() => props.onToggleOpen(props.venue.id)}>
          <h3>{ props.venue.name }</h3>
          <h5>{ props.venue.categories[0].name }</h5>
          <p>{ props.venue.location.address }</p>
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
  // isOpen: PropTypes.string.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  shouldAnimate: PropTypes.bool.isRequired,
  animation: PropTypes.number.isRequired,
};
export default MarkerWithInfoWindow;