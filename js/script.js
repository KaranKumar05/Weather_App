let currentDate = new Date();
let date = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

// Format the date and time string
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

let formattedDate = `${date < 10 ? '0' : ''}${date}-${months[month - 1]}`;
document.querySelector("#date").innerHTML = `<i class="bi bi-calendar3"></i> ${formattedDate}`;
let ampm = hours >= 12 ? 'PM' : 'AM';
let formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
document.querySelector("#time").innerHTML = `<i class="bi bi-clock-fill"></i> ${formattedTime}`;

// js for dark mode
// const toggleButton = document.querySelector("#dark-mode-toggle");
// const body = document.querySelector("body");

// toggleButton.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");
// });
window.getWeather = function () {
  let cityName = document.querySelector("#cityName").value;
  let API_KEY = "bd30503813924350feea847416d7bff9";
  if(cityName ==""){
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      document.querySelector("#name").innerHTML = `Today's Weather of, ${response.data.name} ${response.data.sys["country"]}`;
      document.querySelector("#name").style.padding = "20px";
      document.querySelector("#celsius").innerHTML = `${response.data.main.temp}<span id="cel">°C</span>`;
      document.querySelector("#celsius").style.padding = "10px";
      document.querySelector("#frenhiet").innerHTML = `${((response.data.main.temp * 9 / 5) + 32).toFixed(2)}<span id="cel">°F</span>`;
      document.querySelector("#frenhiet").style.padding = "10px";
      document.querySelector("#humadity").innerHTML = `Humidity: ${response.data.main.humidity}%`
      document.querySelector("#humadity").style.padding = "10px";
      document.querySelector("#feels_like").innerHTML = `Feels Like: ${response.data.main.feels_like}<span id="cel">°C</span>`
      document.querySelector("#feels_like").style.padding = "10px";
      document.querySelector("#status").innerHTML = ` ${response.data.weather[0].description}`
      document.querySelector("#status").style.padding = "10px";
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
      document.querySelector("#celsius").innerHTML = "error in getting weather data";
    })
  }else{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      document.querySelector("#name").innerHTML = `Today's Weather of, ${response.data.name} ${response.data.sys["country"]}`;
      document.querySelector("#celsius").innerHTML = `${response.data.main.temp}<span id="cel">°C</span>`;
      document.querySelector("#frenhiet").innerHTML = `${((response.data.main.temp * 9 / 5) + 32).toFixed(2)}<span id="cel">°F</span>`;
      document.querySelector("#humadity").innerHTML = `Humidity ${response.data.main.humidity}%`
      document.querySelector("#feels_like").innerHTML = `Feels Like ${response.data.main.feels_like}<span id="cel">°C</span>`
      document.querySelector("#status").innerHTML = ` ${response.data.weather[0].description}`
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
      document.querySelector("#celsius").innerHTML = "error in getting weather data";
    })
  }
}