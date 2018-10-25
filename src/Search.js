import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      filteredPlaces:null,
    }
  }
 

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
  if (this.props.apiReturned) {
    return (
      <div>
        { this.props.apiReturned && this.props.locationList.length > 0 ? (
          <ul className="places-list">
            {this.props.locationList.map((venue, id) => (
              <div
            >
              { venue.location.address }
            </div>
            ))}
          </ul>
        ) : (
          <p id="filter-error" className="empty-input">
            No places match filter
          </p>
        )}
      </div>)
    }  else {
      return (
        <div className="loading-fs">
        <h4 className="loading-message">Loading Restaurants...</h4>
        {/* <img src={spinner} className="spinner" alt="loading indicator" /> */}
      </div>
    )}
  }
};
export default Search