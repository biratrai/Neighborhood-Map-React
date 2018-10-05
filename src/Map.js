import React, { Component } from 'react';
import { withGoogleMap, withScriptjs,GoogleMap, Marker, InfoWindow } from 'react-google-maps';
const { compose, withProps, withStateHandlers } = require("recompose");

class Map extends Component {
  renderMarker(venue) {
    console.log('location renderMarker '+ venue.location.lat +" "+ venue.location.lng)
    var isOpen = false;
    var onToggleOpen= (isOpen) => {
      console.log("onToggleOpen")
      this.isOpen = !!isOpen
    }
    return(
      
      <Marker key={venue.location.address}
      position={{ lat: venue.location.lat , lng: venue.location.lng }}
      onClick={()=>{onToggleOpen(true)}}
      >
        {isOpen && <InfoWindow>
          <div onCloseclick={onToggleOpen(false)}>
            {/* <img src="https://i.imgur.com/7IgBxnH.jpg" width="150px" /> */}
            <div>{venue.name}</div>
            <div>{venue.location.address}</div>
          </div>
        </InfoWindow>}
      </Marker>
    ); 
  }

   

  // renderMarker(venue) {
  //   const MapWithAMakredInfoWindow = compose(
  //     withStateHandlers(() => ({
  //       isOpen: false,
  //     }), {
  //       onToggleOpen: ({ isOpen }) => () => ({
  //         isOpen: !isOpen,
  //       })
  //     }),
  //   )(stateOfProps =>
    
  //       <Marker
  //         position={{ lat: 40.756795, lng: -73.954298}}
  //         onClick={stateOfProps.onToggleOpen}
  //       > {

  //       }
  //         {stateOfProps.isOpen && <InfoWindow onCloseClick={stateOfProps.onToggleOpen}>
            
  //         </InfoWindow>}
  //       </Marker>
  //   );
  //   return(
  //     <MapWithAMakredInfoWindow/>
  //   );
  // }
//   toggleInfoWindow(){
// <Marker key={venue.location.address}
//       position={{ lat: venue.location.lat , lng: venue.location.lng }}
//       onClick={()=>{this.onToggleOpen}}
//     >
//       <InfoWindow>
//         <div onCloseclick={this.onToggleOpen}>
//           {/* <img src="https://i.imgur.com/7IgBxnH.jpg" width="150px" /> */}
//           <div>{venue.name}</div>
//           <div>{venue.location.address}</div>
//         </div>
//       </InfoWindow>
//     </Marker>
    
//   }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      
       <GoogleMap
         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
         defaultZoom = { 13 }
        >
        {
          this.props.locationList.map((venue) => {
            if(venue != null){
              return this.renderMarker(venue);
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