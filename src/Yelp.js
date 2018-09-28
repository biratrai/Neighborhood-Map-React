import React, { Component } from 'react';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer gr2wwg-XsG_mpTRK3PcgsHPaPPmeSa-r9JKLq3HKJSIJ5hvojQsZjxhgqJos4NJND6Tu9LcKXeoAwRdnu3VBX6f5Shs06FuRMKCM13UD1pFXIF8roc_Ypzy8LWqtW3Yx'
  },
  params: {
    term: 'restaurant',
    location: 'detroit'
  }
};

class Yelp extends Component {

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response))
    .catch(function(error){
      console.log(error);
    });
    }
  
  render(){
    return (
        <h1> My first yelp authentication request </h1>
    );
  }
}

export default Yelp;