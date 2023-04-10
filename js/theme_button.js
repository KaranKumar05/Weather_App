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

const row = document.querySelector("#row");

const column = document.querySelector("#column");
const twitter= document.querySelector("#twitter");
const linkedin= document.querySelector("#linkedin");
const github= document.querySelector("#github");
const whatsapp= document.querySelector("#whatsapp");


toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    header.style.transition = "1.5s";
    body.style.backgroundImage = "url(../images/bg.jpg)";
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
    
    row.style.transition = "1.5s";
    row.style.color = "black"
    column.style.transition = "1.5s";
    column.style.color = "black";
    twitter.style.transition = "1.5s";
    twitter.style.color = "black"
    github.style.transition = "1.5s";
    github.style.color = "black";
    linkedin.style.transition = "1.5s";
    linkedin.style.color = "black";
    whatsapp.style.transition = "1.5s";
    whatsapp.style.color = "black";
    darkModeText.style.transition = "1.5s";
    darkModeText.style.fontWeight = "bold"
    
  } else {
    body.style.backgroundImage = "url(../images/dark_bg.jpeg)";
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
    row.style.transition = "1.5s";
    row.style.color = "white"
    column.style.transition = "1.5s";
    column.style.color = "white"
    twitter.style.transition = "1.5s";
    twitter.style.color = "white";
    github.style.transition = "1.5s";
    github.style.color = "white";
    linkedin.style.transition = "1.5s";
    linkedin.style.color = "white";
    whatsapp.style.transition = "1.5s";
    whatsapp.style.color = "white";
    darkModeText.style.transition = "1.5s";
    darkModeText.style.fontWeight = "bold";

  }
});