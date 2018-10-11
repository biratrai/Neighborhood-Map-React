import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
    // 'Authorization': 'Bearer gr2wwg-XsG_mpTRK3PcgsHPaPPmeSa-r9JKLq3HKJSIJ5hvojQsZjxhgqJos4NJND6Tu9LcKXeoAwRdnu3VBX6f5Shs06FuRMKCM13UD1pFXIF8roc_Ypzy8LWqtW3Yx'
  },
  params: {
    query: 'restaurant',
    near: 'manhattan',
    limit: 10,
    client_id: 'HBYEVO4EIPOICOXSJNABR3PVXDNTCUC4FSM220H1CEVHYGID',
    client_secret : 'BHNP3EE1OS4TTJTD5HFOQHI4EOQCTNIGA01QJJYBTKZ0NIDH',
    v : '21120609'
  }
};

export const getLocationList = (props) => {
  axios.get('https://api.foursquare.com/v2/venues/search', config)
  .then(response => {
    console.log(response);
    this.props.onLoad(response);
  })
  .catch(function(error){
    console.log(error);
  });
}