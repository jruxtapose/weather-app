import "../css/styles.css";
import { getWeather } from "./visualcrossingapi";
import { fetchGif } from "./giphyapi";

const form = document.querySelector("form");
form.querySelector("input").value = "";
const display = document.querySelector("#weather-display");

form.addEventListener("submit", (e) => handleSubmit(e));

const handleSubmit = (e) => {
  e.preventDefault();
  const input = form.querySelector("input");
  const location = input.value;
  display.querySelector('#location').textContent = 'Searching...';
  getWeather(location)
  .then((yourWeather) => {
    display.querySelector("#location").textContent =
      yourWeather.resolvedLocation;
    display.querySelector("#conditions").textContent =
      yourWeather.currentConditions;
    display.querySelector("#temperature").textContent = yourWeather.currentTemp;
    fetchGif(yourWeather.currentConditions);
  })
  .catch(err => {
    console.error(err);
    display.querySelector('#location').textContent = 'Error, check console for details.'
  })
};
