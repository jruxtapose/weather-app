const myKey = "9ABRYBLAZKZQQPDFPWZ7RUCRP";
const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

const getWeather = async (location) => {
  return fetch(`${apiURL}${location}?key=${myKey}`, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const resolvedLocation = response.resolvedAddress;
      const currentConditions = response.currentConditions.conditions;
      const currentTemp = response.currentConditions.temp;
      return {
        resolvedLocation,
        currentConditions,
        currentTemp,
      };
    })
    .catch(function (err) {
      console.error("Oops, try again.");
      console.error(err);
    });
};

export { getWeather };
