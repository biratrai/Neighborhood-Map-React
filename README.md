# Neighborhood-Map-React

---
![Demo Screen] (src/images/app-screen-shot.png "Demo Screen")
## What is the Project about:

This app provides a listing of Restaurants in Detroit, Michigan. The project is built for the Udacity Front End WebNanodegree Program. The application is React-based using google Maps Api.

The map is generated by the Google Maps API. 

## Try Demo 
[Neighborhood-Map-React](https://udacity-restaurant-map.herokuapp.com/)

## How to Load the App in Development Mode

The project uses Node.js and the create-React-App starter from facebook. 

Install : [Node.js](https://nodejs.org/en/)
Install : [create-react-app](https://github.com/facebook/create-react-app)

Once Node is installed, navigate to the directory where you want to clone the app

```
git clone https://github.com/biratrai/Neighborhood-Map-React.git
npm install
```

Once all of the dependencies have been installed you can launch the app with

```
npm start
```

A browser window will automatically load at [http://localhost:3000/](http://localhost:3000/) in your browser. Once you run the npm start command and should automatically refresh if any changes 

**_NOTE:_** _The service workers will only cache the application in production mode._

## Loading the App in Production Mode

To run the app in production mode locally run:

```
npm run build
```

You can use Node [serve](https://github.com/zeit/serve). If you do not have it installed you can install it with:

```
npm install -g serve
```

and then navigate into the build directory and run

```
serve -s build
```

The site will be hosted at [http://localhost:5000](http://localhost:5000)

The service worker is registered in the production mode and webpages will serve cached version.


## The project uses Foursquare and Google Maps API

### Foursquare
You can get the Foursquare API keys by signing up for a free personal account here:  **[Foursquare Developers Sign-up](https://foursquare.com/developers/signup)**

Log-in and click "Create a new app".  Paste the *Client ID* and *Client Secret* keys in `credentials.js`

### Google Maps
To get a Google Maps API key follow the directions here:  **[Google Maps:
Get API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)**.

Choose the Maps platform and enable "Google Maps Platform". To protect your API from unwanted usage make sure you add an Allowed Referred (e.g. `localhost`) in the API console.

## How to Use the App

- The app will load displaying a map of Red Bank with markers for each restaurant and a list of restaurants in the sidebar
- Click on a map marker or name on the restaurant list to get details about each restaurant

### Resources and Documentation:

- [Create-react-app Documentation](https://github.com/facebookincubator/create-react-app)
- [React API](https://facebook.github.io/react/docs/react-api.html)
- [Foursquare API - Venue Search](https://developer.foursquare.com/docs/api/venues/search)
- [Foursquare API - Venue Details](https://developer.foursquare.com/docs/api/venues/details)
- [Material UI - React Components] (https://github.com/mui-org/material-ui)
- [React spinner] (https://github.com/davidhu2000/react-spinners)

### Udacity Resources:

- [Project Rubric](https://review.udacity.com/#!/rubrics/1351/view)
- [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
- [Udacity Responsive Web Design Fundamentals Course > Pattern - Off Canvas lesson](https://classroom.udacity.com/courses/ud893/lessons/3561069759/concepts/35307193050923)

_This project is licensed under the terms of the MIT license._