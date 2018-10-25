import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';

const FilterItemList = () => { 
    return (
    <List>
        <div>
            <ListItem button>
            <TextField
                id="standard-search"
                label="Filter locations"
                type="search"
                //   className={classes.textField}
                //   margin="normal"
                />
            </ListItem>    
            <ListItem button onClick={alert}>
            <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
            <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button>
            <ListItemText primary="Send mail" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Trash" />
            </ListItem>
        </div>
    </List>
    )
}

export default FilterItemList;