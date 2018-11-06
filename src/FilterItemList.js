import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';

// Stateless functional Component
const FilterItemList = (props) => {
    
    // Function to handle the event change
    const handleChange = filterLocation => event => {
        filterLocation(event.target.value)
    };

    return (
        // List of restaurants
        <List style={{maxHeight: '600px',
        overflow: 'auto'}}>
            <ListItem button>
                <TextField
                    id="standard-search"
                    label="Filter locations"
                    type="search"
                    onChange={ handleChange(props.filterLocation) }
                    />
            </ListItem> 
            { props.locations.length < 1 && 
                <ListItem >
                    <ListItemText primary={ "No restaurant to show! "} />
                </ListItem>
            }   
            { props.locations.map((venue) =>
                {   // Return list item; whose onClick animates the marker
                    return <ListItem button onClick={ () => props.onToggleOpen(venue.id) } key={venue.id} >
                                <ListItemText primary={ venue.name } />
                            </ListItem>
                }
            )}
        </List>
    );
}

FilterItemList.propTypes = {
    filterLocation: PropTypes.func.isRequired,
    onToggleOpen: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired,
};
export default FilterItemList;