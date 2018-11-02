import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// Stateless functional Component
const MarkerWithInfoWindow = (props) => {
  const { classes } = props;
  return(
    
    <Marker 
      position={{ lat: props.venue.location.lat, lng: props.venue.location.lng }}
      onClick={ () => props.onToggleOpen(props.venue.id)}
      animation= { props.currentSelected === props.venue.id && props.shouldAnimate? props.animation: null }
    >
      { 
        (props.currentSelected === props.venue.id) && <Card className={classes.card}><InfoWindow onCloseClick={ props.onToggleOpen }>
        <div onClick={() => props.onToggleOpen("")}>
        
          <h3>{ props.venue.name }</h3>
          <h5>{ props.venue.categories[0].name }</h5>
          <p>{ props.venue.location.address }</p>
        
       </div>
      </InfoWindow>
      </Card>}
      
    </Marker>
  );
};

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
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
export default withStyles(styles) (MarkerWithInfoWindow);