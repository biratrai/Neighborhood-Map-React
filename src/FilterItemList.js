import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';

// Stateless functional Component
const FilterItemList = ({ locations } ) => { 
    return (
        <List>
            <ListItem button>
                <TextField
                    id="standard-search"
                    label="Filter locations"
                    type="search"
                    />
            </ListItem>    
            { locations.map((venue) =>
                { 
                    return <ListItem button onClick={alert}>
                                <ListItemText primary={venue.name} />
                            </ListItem>
                }
            )}
        </List>
    );
}

export default FilterItemList;