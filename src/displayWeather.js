import "./style.css";
import { getDay } from "./getDay";

export const displayWeather = (days) => {
  const displayWeather = document.createElement("div");
  days.forEach((day) => {
    const dayDisplay = document.createElement("div");
    dayDisplay.classList.add("day-display");

    const dayNameDisplay = document.createElement("h2");
    dayNameDisplay.textContent = getDay(day.datetime);

    const dayConditionsDisplay = document.createElement("div");
    const dayConditionsDisplayLabel = document.createElement("span");
    dayConditionsDisplayLabel.textContent = "Conditions";
    const dayConditionsDisplayValue = document.createElement("p");
    dayConditionsDisplayValue.textContent = day.conditions;
    dayConditionsDisplay.append(
      dayConditionsDisplayLabel,
      dayConditionsDisplayValue
    );

    const dayTempMaxDisplay = document.createElement("div");
    const dayTempMaxDisplayLabel = document.createElement("span");
    dayTempMaxDisplayLabel.textContent = "Max";
    const dayTempMaxDisplayValue = document.createElement("p");
    dayTempMaxDisplayValue.textContent = day.tempmax;
    dayTempMaxDisplay.append(dayTempMaxDisplayLabel, dayTempMaxDisplayValue);

    const dayTempMinDisplay = document.createElement("div");
    const dayTempMinDisplayLabel = document.createElement("span");
    dayTempMinDisplayLabel.textContent = "Min";
    const dayTempMinDisplayValue = document.createElement("p");
    dayTempMinDisplayValue.textContent = day.tempmin;
    dayTempMinDisplay.append(dayTempMinDisplayLabel, dayTempMinDisplayValue);

    dayDisplay.append(
      dayNameDisplay,
      dayConditionsDisplay,
      dayTempMaxDisplay,
      dayTempMinDisplay
    );
    displayWeather.append(dayDisplay);
    displayWeather.classList.add("display-weather");
  });
  return displayWeather;
};
