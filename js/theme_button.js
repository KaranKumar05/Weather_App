const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const header = document.querySelector("#header");
// const cityName = document.querySelector("#cityName");
const input = document.querySelector("input");
// const inputplaceholder = document.querySelector("input::placeholder");

const darkModeText = document.getElementById("dark-mode-text");
const btn = document.querySelector("#btn");
const head = document.querySelector("#name");
const temp = document.querySelector(".temp");
const otherInfo = document.querySelector(".otherInformation")

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    header.style.transition = "1.5s";
    body.style.backgroundImage = "url('../images/bg.jpg')";
    header.style.color = "black";
    input.style.transition = "1.5s";
    input.style.color = "";
    input.style.backgroundColor = "";
    // inputplaceholder.style.color = "";
    // document.querySelector("#cityName::palceholder").style = "color:black"
    btn.style.transition = "1.5s";
    btn.style.color = "black";
    btn.style.backgroundColor = "white";
    head.style.transition = "1.5s";
    head.style.color = "";
    head.style.backgroundColor = "";
    temp.style.transition = "1.5s";
    temp.style.color = "black";
    temp.style.backgroundColor = "";
    otherInfo.style.transition = "1.5s";
    otherInfo.style.color = "black";
    otherInfo.style.backgroundColor = "";
    darkModeText.style.transition = "1.5s";
    darkModeText.style.fontWeight = "bold"
  } else {
    body.style.backgroundImage = "url('../images/dark_bg.jpeg')";
    body.style.transition = "1.5s";
    header.style.color = "white";
    input.style.transition = "1.5s";
    input.style.color = "white";
    input.style.backgroundColor = "rgba(0, 0, 0, 0.607)";
    input.style.placeholderColor = "white"
    // inputplaceholder.style.color = "white";
    // document.querySelector("#cityName::placeholder").style = "color:white"

    btn.style.transition = "1.5s";
    btn.style.color = "white";
    btn.style.backgroundColor = "black";
    head.style.transition = "1.5s";
    head.style.color = "white";
    head.style.backgroundColor = "rgba(0, 0, 0, 0.607)";
    temp.style.transition = "1.5s";
    temp.style.color = "white";
    temp.style.backgroundColor = "rgba(0, 0, 0, 0.607)";
    otherInfo.style.transition = "1.5s";
    otherInfo.style.color = "white";
    otherInfo.style.backgroundColor = "rgba(0, 0, 0, 0.607)";
    darkModeText.style.transition = "1.5s";
    darkModeText.style.fontWeight = "bold";
  }
});