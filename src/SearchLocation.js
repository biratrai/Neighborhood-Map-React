import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import { DebounceInput } from 'react-debounce-input';

class SearchLocation extends Component {
    
    handleChange = searchLocation => event => {
        searchLocation(event.target.value)
    };

    render(){
        return (
            <List>
                <ListItem button>
                    <DebounceInput
                        minLength= {2}
                        debounceTimeout={300}
                        placeholder="Search Restaurants"
                        element="input" 
                        style={{flex: "1", fontSize: "1.25em"}}
                        onChange={ this.handleChange(this.props.searchLocation) }
                        />
                </ListItem>    
            </List>
        );
    }
}

export default SearchLocation;