import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';

class FilterItemList extends Component {
    
    handleChange = filterLocation => event => {
        filterLocation(event.target.value)
    };

    render(){
        return (
            <List>
                <ListItem button>
                    <TextField
                        id="standard-search"
                        label="Filter locations"
                        type="search"
                        onChange={ this.handleChange(this.props.filterLocation) }
                        />
                </ListItem>    
                { this.props.locations.map((venue) =>
                    { 
                        return <ListItem button onClick={alert}>
                                    <ListItemText primary={venue.name} />
                                </ListItem>
                    }
                )}
            </List>
        );
    }
}

export default FilterItemList;