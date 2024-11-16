export async function getData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next4days?unitGroup=metric&key=NZ298GUJEDTLZ4UJCDQTS29QF`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data.days;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
