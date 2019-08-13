import React from 'react';

import axios from 'axios';

export default class ForecastWeather extends React.Component {
  state = {
    temp: undefined,
    condition: undefined,
    isLoading: true
  }

  componentDidMount() {

    let temp = undefined;
    let condition = undefined;

    axios.get(`http://api.apixu.com/v1/forecast.json?key=2b36b0a0913a46ad863161615191208&q=New+York`)
      .then(function(response) {
        const weather = response;
        console.log(weather.data.forecast.forecastday[0].day.maxtemp_f);
        temp = weather.data.forecast.forecastday[0].day.maxtemp_f;
        condition = weather.data.forecast.forecastday[0].day.condition.text;
      })
      .then(() => {
            console.log(temp)
            console.log(condition)
            this.setState({
                temp,
                condition,
            });
      });

  }

  render() {
    return (
      <div>
        {this.state.temp}
        {this.state.condition}
      </div>
    )
  }
}