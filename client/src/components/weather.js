getWeather() {
    let url = "http://api.apixu.com/v1/forecast.json?key=2b36b0a0913a46ad863161615191208&q=NewYork";
    axios
      .get(url)
      .then(response => {
            this.currentTemp = response.data.main.temp;
            this.minTemp = response.data.main.temp_min;
            this.maxTemp = response.data.main.temp_max;
            this.pressure = response.data.main.pressure;
            this.humidity = response.data.main.humidity + '%';
            this.wind = response.data.wind.speed + 'm/s';
            this.overcast = response.data.weather[0].description;
            
    })
    .catch(error => {
      console.log(error);
    })
  }