const numberDays = {
  0: "monday",
  1: "tuesday",
  2: "wednesday",
  3: "thursday",
  4: "friday",
  5: "saturday",
  6: "sunday",
};

export const getDay = (date) => {
  const newDate = new Date(date);
  const dayNumber = newDate.getDay();
  return numberDays[dayNumber];
};
