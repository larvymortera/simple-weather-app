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

// Get date and time.
const getCurrentDateTime = (offset) => {
  const localDate = new Date();
  const totalOffset = (localDate.getTimezoneOffset() * 60 * 1000) + (offset * 1000);
  const date = new Date(localDate.getTime() + totalOffset);
  const hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
  const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
};
