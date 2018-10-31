import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { DebounceInput } from 'react-debounce-input';

class SearchLocation extends Component {
    
    handleChange = searchLocation => event => {
        console.log("event "+event.target.value)
        if(event.target.value)
            searchLocation(event.target.value)
    };

    render(){
        return (
            <List>
                <ListItem button>
                    <DebounceInput
                        minLength= { 2 }
                        debounceTimeout={ 400 }
                        placeholder="Search by city name"
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