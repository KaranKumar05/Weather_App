window.getWeather = function () {
  // Create a new date object
  let currentDate = new Date();
  // Get the date and time values
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  // let hours = currentDate.getHours();
  // let minutes = currentDate.getMinutes();

  // Format the date and time string
  let formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
  // let formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Display the date and time
  document.querySelector("#date").innerHTML = `Date:${formattedDate}`
  // document.querySelector("#time").innerHTML = `time:${formattedTime}`

  // let counterName = document.querySelector("#counterName").value;
  let cityName = document.querySelector("#cityName").value;
  let API_KEY = "bd30503813924350feea847416d7bff9";
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      document.querySelector("#temp").innerHTML = `Results for, `;
      document.querySelector("#celsius").innerHTML = `${response.data.name} ${response.data.sys["country"]}<br>${response.data.main.temp}°C`;
      document.querySelector("#frenhiet").innerHTML = `${(response.data.main.temp * 9 / 5) + 32}°F`;
      document.querySelector("#otherInformation").innerHTML = `Humidity ${response.data.main.humidity}%<br>Feels Like ${response.data.main.feels_like}`
      // document.querySelector("#otherInformation").innerHTML = `Humidity ${response.data.main.humidity}%<br>Feels Like ${response.data.main.feels_like} <br> ${response.data.main.weather.0["description"]}`
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
      document.querySelector("#celsius").innerHTML = "error in getting weather data";
    })
}