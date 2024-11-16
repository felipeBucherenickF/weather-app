import { getDay } from "./getDay";

export const displayWeather = (days) => {
  const displayWeather = document.createElement("div");
  days.forEach((day) => {
    const dayDisplay = document.createElement("div");

    const dayDateDisplay = document.createElement("p");
    dayDateDisplay.textContent = getDay(day.datetime);

    const dayConditionsDisplay = document.createElement("div");
    const dayConditionsDisplayLabel = document.createElement("p");
    dayConditionsDisplayLabel.textContent = "Conditions";
    const dayConditionsDisplayValue = document.createElement("p");
    dayConditionsDisplayValue.textContent = day.conditions;
    dayConditionsDisplay.append(
      dayConditionsDisplayLabel,
      dayConditionsDisplayValue
    );

    const dayTempMaxDisplay = document.createElement("div");
    const dayTempMaxDisplayLabel = document.createElement("p");
    dayTempMaxDisplayLabel.textContent = "Max temperature";
    const dayTempMaxDisplayValue = document.createElement("p");
    dayTempMaxDisplayValue.textContent = day.tempmax;
    dayTempMaxDisplay.append(dayTempMaxDisplayLabel, dayTempMaxDisplayValue);

    const dayTempMinDisplay = document.createElement("div");
    const dayTempMinDisplayLabel = document.createElement("p");
    dayTempMinDisplayLabel.textContent = "Min temperature";
    const dayTempMinDisplayValue = document.createElement("p");
    dayTempMinDisplayValue.textContent = day.tempmin;
    dayTempMinDisplay.append(dayTempMinDisplayLabel, dayTempMinDisplayValue);

    dayDisplay.append(
      dayDateDisplay,
      dayConditionsDisplay,
      dayTempMaxDisplay,
      dayTempMinDisplay
    );
    displayWeather.append(dayDisplay);
  });
  return displayWeather;
};
