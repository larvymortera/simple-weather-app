// openweathermap.org api.
const appId = '695d87a5accb140db2d91c0b5df5d8c7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Fetch weather data from openweathermap.org.
const fetchWeatherData = (location) => {
  return fetch(`${apiUrl}?q=${location}&appId=${appId}&units=metric`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // No data found.
      if (data.cod === "404") {
        return {};
      }

      return {
        name: data.name,
        temp: data.main.temp,
        timezone: data.timezone,
        weather: data.weather[0] ?? {},
      };
    });
};
