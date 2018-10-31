import React from 'react';
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
        <List>
            <ListItem button>
                <TextField
                    id="standard-search"
                    label="Filter locations"
                    type="search"
                    onChange={ handleChange(props.filterLocation) }
                    />
            </ListItem>    
            { props.locations.map((venue) =>
                {   // Return list item; whose onClick animates the marker
                    return <ListItem button onClick={ () => props.animateMarker(true, venue.id) } key={venue.id}>
                                <ListItemText primary={venue.name} />
                            </ListItem>
                }
            )}
        </List>
    );
}

export default FilterItemList;