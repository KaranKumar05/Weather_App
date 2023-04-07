window.getWeather = function () {
    // let counterName = document.querySelector("#counterName").value;
    let cityName = document.querySelector("#cityName").value;
    let API_KEY = "bd30503813924350feea847416d7bff9";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        document.querySelector("#temp").innerHTML = `Results for, `;
        document.querySelector("#celsius").innerHTML = `${response.data.name} ${response.data.sys["country"]}<br>${response.data.main.temp}°C`;
        document.querySelector("#frenhiet").innerHTML = `${(response.data.main.temp * 9/5) + 32}°F`;
        document.querySelector("#otherInformation").innerHTML = `Humidity ${response.data.main.humidity}% <br>Pressure ${response.data.main.pressure}`
      })
      .catch(function (error) {
        // handle error
        console.log(error.data);
        document.querySelector("#celsius").innerHTML = "error in getting weather data";
      })
  }