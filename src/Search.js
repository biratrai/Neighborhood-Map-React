import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: '',
      apiReturned: true,
      filteredPlaces:null,
    }
  }
 

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
     <div>
    <input
      type="text"
      placeholder="filter by name"
      value={this.state.query}
      // onChange={this.filterPlaces}
      className="query"
      role="search"
      aria-labelledby="text filter"
      tabIndex={true ? "0" : "-1"}
    />
    {this.state.apiReturned && this.props.locationList.length > 0 ? (
      <ul className="places-list">
        {this.props.locationList.map((venue, id) => (
          <div
        >
          {venue.location.address}
        </div>
        ))}
      </ul>
    ) : (
      <p id="filter-error" className="empty-input">
        No places match filter
      </p>
    )}
  </div>
   )
 }
}

export default Search