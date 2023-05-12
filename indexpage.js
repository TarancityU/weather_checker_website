// Get DOM elements
const input = document.querySelector('#city');
const button = document.querySelector('#in');
const cityOutput = document.querySelector('#displaymess');
const descriptionOutput = document.querySelector('#info');
const temperatureOutput = document.querySelector('#citytemp');
const windOutput = document.querySelector('#citywind');

// Configure API settings
const apiKey = '3045dd712ffe6e702e3245525ac7fa38';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Convert temperature from Kelvin to Celsius
function convertToCelsius(kelvin) {
  return (kelvin - 273).toFixed(2);
}

// Handle API response and update DOM elements
function handleApiResponse(data) {
  const cityName = data.name;
  const weatherDescription = data.weather[0].description;
  const temperature = convertToCelsius(data.main.temp);
  const windSpeed = data.wind.speed;

  cityOutput.innerHTML = `Weather in <span>${cityName}</span>`;
  descriptionOutput.innerHTML = `Sky Conditions: <span>${weatherDescription}</span>`;
  temperatureOutput.innerHTML = `Temperature: <span>${temperature} &#8451;</span>`;
  windOutput.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
}

// Handle errors and display error message
function handleApiError(error) {
  alert('City not found. Please check your spelling and try again.');
}

// Add event listener for button click
button.addEventListener('click', function() {
  const cityName = input.value.trim();

  // Make API call with fetch
  fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('API request failed');
      }
      return response.json();
    })
    .then(data => {
      handleApiResponse(data);
    })
    .catch(error => {
      handleApiError(error);
    });
});