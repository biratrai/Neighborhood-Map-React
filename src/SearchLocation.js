import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { DebounceInput } from 'react-debounce-input';

// Stateless functional Component
const SearchLocation = ({ searchLocation }) => {
    const handleChange = searchLocation => event => {
        if(event.target.value)
            searchLocation(event.target.value)
    };
    return (
        <List>
            <ListItem button>
                <DebounceInput
                    minLength= { 2 }
                    debounceTimeout={ 400 }
                    placeholder="Search by city name"
                    element="input" 
                    style={{flex: "1", fontSize: "1.25em"}}
                    onChange={ handleChange(searchLocation) }
                    />
            </ListItem>    
        </List>
    );
}

SearchLocation.propTypes = {
    searchLocation: PropTypes.func.isRequired
};
export default SearchLocation;