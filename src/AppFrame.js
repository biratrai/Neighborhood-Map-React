import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import App from './App.js';
import FilterItemList from './FilterItemList'
import { getLocationList } from './LocationList.js'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 800,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  typography: {
    useNextVariants: true,
  },
});

class AppFrame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locations: [],
      apiReturned: false,
      hasError: false,
      errorMsg: "",
      isLoading: true,
      mobileOpen: false,
      filteredLocations: []
    }
  }

  getData = (response) => {
    if(response.data !== undefined){
      console.log("seltLocationDATa")
      return this.setLocationData(response);
    } else {
      return this.setErrorData(response);
    }
  }

  setLocationData = (response) => {
    this.setState(
      {
        locations : response.data.response.venues,
        apiReturned : true,
        isLoading: false,
        filteredLocations: response.data.response.venues
      });
  }

  setErrorData = (error) => {
    this.setState(
      {
        hasError : true,
        errorMsg: error,
        isLoading: false
      });
  }

  componentDidMount(){
    getLocationList(this.getData)
  }

  filterLocation = (text) => {
    console.log("userInput "+ text)
    const loc = this.state.locations
    let filterLoc = 
                loc.filter(venue => { 
                      venue.name.startsWith(text)
                      console.log("venue "+venue.name.startsWith(text))
                    })
                    
    this.setState(
      {
        filteredLocations: filterLoc
      }
    )
    console.log("FilteredLocations "+ filterLoc)
    console.log("FilteredLocations "+ this.state.locations)
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={ classes.toolbar } />
        <Divider />
        <FilterItemList locations={ this.state.filteredLocations } filterLocation={ this.filterLocation }/>
      </div>
    );

    return (
      <div className={ classes.root }>
        <AppBar className={ classes.appBar }>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={ this.handleDrawerToggle }
              className={ classes.navIconHide }
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Neighborhood Map
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            { drawer }
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            { drawer }
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <App hasError={ this.state.hasError } locations= { this.state.filteredLocations } 
            apiReturned= { this.state.apiReturned} isLoading= { this.state.isLoading }/>
        </main>
      </div>
    );
  }
}

AppFrame.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppFrame);
