import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    query: 'restaurant',
    near: "manhattan",
    limit: 10,
    client_id: 'HBYEVO4EIPOICOXSJNABR3PVXDNTCUC4FSM220H1CEVHYGID',
    client_secret : 'BHNP3EE1OS4TTJTD5HFOQHI4EOQCTNIGA01QJJYBTKZ0NIDH',
    v : '21120609'
  }
};

export const getLocationList = (getData, location) => {
  config.params.near = location;
  axios.get('https://api.foursquare.com/v2/venues/search', config)
  .then(response => {
    getData(response);
  })
  .catch((error) => {
    // Error
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        getData(error);
        console.log("error response "+error.response.status)
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log("error request "+error.request);
        getData(error);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log("error config: "+error.config);
   
  });
}