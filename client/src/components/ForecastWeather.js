import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    temp: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get(`http://api.apixu.com/v1/forecast.json?key=2b36b0a0913a46ad863161615191208&q=New+York`)
      .then(function(response, data) {
        const weather = response.data;
        console.log(weather)
      })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}