# weather_checker_website
This is a simple weather app that allows users to input a city name and get the current weather conditions for that city. The app uses the OpenWeather API to retrieve weather data and display it on the page.

How to Use
Clone the repository or download the files.
Open the index.html file in your web browser.
Type in the name of a city in the input field.
Click the submit button to retrieve the weather data for the city.
The app will display the city name, description of the weather, temperature, and wind speed.
Technologies Used
This app was built using HTML, CSS, and JavaScript. It uses the Fetch API to make requests to the OpenWeather API and display the weather data on the page.

Code Explanation
The JavaScript code starts by getting the necessary DOM elements using document.querySelector(). It then sets the API key and API URL for the OpenWeather API. 
A function convertToCelsius() is defined to convert the temperature from Kelvin to Celsius.

The handleApiResponse() function is used to extract the necessary data from the API response and update the DOM elements with the weather data. 

The handleApiError() function is used to handle errors when the API request fails or when the city name entered by the user is not found.

Finally, an event listener is added to the submit button that retrieves the city name entered by the user, makes an API call using fetch(), 
and updates the DOM elements with the weather data using the handleApiResponse() function. 
If there is an error, the handleApiError() function is called to display an error message to the user.

Conclusion
This weather app is a simple example of how to use an API to retrieve data and display it on a web page.
You can use this as a starting point to build more complex weather apps or any other app that requires data from an API.
