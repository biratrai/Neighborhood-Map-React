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
  .catch(function(error){
    console.log(error);
    getData(error);
  });
}