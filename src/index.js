import { displayWeather } from "./displayWeather";
import { getData } from "./getData";

let days = [];

const getInfo = async (location) => {
  const data = await getData(location);
  return data;
};

const content = document.querySelector("#content");

const location = document.querySelector("#location");
const getInfoButton = document.querySelector("button");
getInfoButton.addEventListener("click", async (event) => {
  event.preventDefault();
  days = await getInfo(location.value);
  console.log(days);
  const weather = displayWeather(days);
  content.append(weather);
});
