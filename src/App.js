import React from 'react';
import PropTypes from 'prop-types';
import Map from './Map.js';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ClipLoader } from 'react-spinners';
import { css } from 'react-emotion';

// Stateless functional Component
const App = (props) => {
    let content;
    if(props.hasError ){
      // If error show appropriate error
      if (props.errorMsg.response) {
        content = <div className="error" >
        <h3>{ props.errorMsg.message }</h3>
          <p>{ props.errorMsg.response.data.meta.errorDetail }</p> 
          <p>{ "Please search again!" }</p>
        </div>
      } else if (props.errorMsg.request) {
        content = <Typography variant="h5" color="error">
                    "Couldn't fetch data. Please try again later"
                  </Typography>
          
      }
      // If successful show Map
    } else {
      content = <div>
        <Map locationList = { props.locations } 
          shouldAnimate = { props.shouldAnimate } 
          currentSelected={ props.currentSelected }
          onToggleOpen={ props.onToggleOpen }
          geometry={ props.geometry }
          />
      </div>
    }
    
    console.log("loading "+props.isLoading)
    return (
      // If loading show spinner else load content
      <div className="App">
        {props.isLoading &&  <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={80}
          color={'#123abc'}/>
        }
        { !props.isLoading && content } 
      </div>
    );
}

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

App.propTypes = {
  hasError: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  locations: PropTypes.array.isRequired,
  shouldAnimate: PropTypes.bool.isRequired,
  currentSelected: PropTypes.string.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  geometry: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default App;
