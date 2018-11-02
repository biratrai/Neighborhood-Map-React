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
import { getLocationList } from './LocationApi.js'
import SearchLocation from './SearchLocation.js';
import PoweredByFourSquareLogo from './images/foursquare.png';
import Avatar from '@material-ui/core/Avatar';
import FourSquareLogo from './images/FourSquareLogo.png'

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
  grow: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  }
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
      filteredLocations: [],
      shouldAnimate: false,
      currentSelected: "",
      geometry: { lat: 0.0, lng:0.0 }
    }
  }

  getData = (response) => {
    if(response.data !== undefined){
      console.log("Got data")
      return this.setLocationData(response);
    } else {
      console.log("Got an error")
      return this.setErrorData(response);
    }
  }

  setLocationData = (response) => {
    this.setState(
      {
        locations : response.data.response.venues,
        hasError : false,
        apiReturned : true,
        errorMsg: "",
        isLoading: false,
        filteredLocations: response.data.response.venues,
        geometry: response.data.response.geocode.feature.geometry.center
      });
  }

  setErrorData = (error) => {
    let apiValue;
    if(error.response) {
      console.log("error.response "+error.response)
      apiValue = true;
    } else {
      console.log("error.response "+error.request)
      apiValue = false;
    }
    this.setState(
      {
        hasError : true,
        errorMsg: error,
        isLoading: false,
        apiReturned : apiValue,
        filteredLocations: []
      });
  }

  componentDidMount(){
    getLocationList(this.getData, "manhattan")
  }

  searchLocation = (text) => {
      getLocationList(this.getData, text)
  }

  filterLocation = (text) => {                    
    this.setState(
      {
        filteredLocations: text? this.state.locations.filter(venue => { 
                              return venue.name.startsWith(text) 
        }) : this.state.locations
      }
    )
  }

  animateMarker = (animate, venueId) => {
    this.setState({ shouldAnimate: animate})
    setTimeout(() => this.setState({ shouldAnimate: false }), 2100)
    this.onToggleOpen( venueId )
    this.handleDrawerToggle()
  }

  onToggleOpen = ( venueId ) => {
    if(venueId === undefined){
      venueId = ""
    }

    this.setState({
      currentSelected : venueId
    }); 
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    // Migration to typography v2 to disable the warning
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    const drawer = (
      <div>
        <div className={ classes.toolbar } style={{ backgroundImage: `url(${ PoweredByFourSquareLogo })`,
          backgroundRepeat:   'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center center' }}
        color="inherit"/>
        <Divider />
        <FilterItemList locations={ this.state.filteredLocations } 
          filterLocation={ this.filterLocation }
          shouldAnimate={ this.state.shouldAnimate}
          animateMarker={ this.animateMarker }/>
      </div>
    );

    return (
      // Drawer Sample code extracted from https://material-ui.com/demos/drawers/#responsive-drawer
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
            <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
              Neighborhood Map
            </Typography>
            <Avatar src={FourSquareLogo} className={classes.avatar}/>
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
        <main className={ classes.content } style={{paddingTop:'0px'}}>
          <div className={ classes.toolbar } />
          {
            !this.state.isLoading && this.state.apiReturned &&
            <SearchLocation searchLocation={ this.searchLocation }/>
          }
          {/* Main App Component */}
          <App 
            hasError={ this.state.hasError } 
            locations= { this.state.filteredLocations } 
            apiReturned= { this.state.apiReturned} 
            isLoading= { this.state.isLoading }
            shouldAnimate={ this.state.shouldAnimate } 
            currentSelected={ this.state.currentSelected }
            onToggleOpen={ this.onToggleOpen }
            geometry={ this.state.geometry }
            errorMsg={ this.state.errorMsg }
          />
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
