let appKey = '54d34bcc91e370649ddfbfc9b97e12dd';

/*
    This function fetches the JSON of a city name which we have searched. The accepted parameter 'cityName' is where we pass the name of city whose weather details we want
    App key variable stores the api key. 
    Query parameter units=metric converts all the units into the metric system. Hence we can see temperatures in celsius and speeds in km/h
*/
async function fetchWeather(cityName){
    const fetchCityData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${appKey}`);
    const response = await fetchCityData.json();
    return changeWeatherBox(response);
    //return response  ---- use this statement to see the JSON object
}

/*
    This function is being used to change/enter the details fetched from fetchWeather function into the weather box that we have designed.
    We used Math.round to round off the temperature to 1 decimal place. 
    There is no necessity to create an async function here because we aren't making any API calls in this function.

*/

function changeWeatherBox(response){
    const city = response.name;
    const temperature = Math.round(response.main.temp * 10)/10;
    const weatherDescription = response.weather[0].main;
    const humidity = response.main.humidity;
    const windSpeed = response.wind.speed;
    document.getElementById('cityName').innerText = `Weather in ${city}`;
    document.getElementById('weather-celsius').innerText = `Temperature: ${temperature} °C`;
    document.getElementById('weather-desc').innerText = `Description: ${weatherDescription}`;
    document.getElementById('weather-humidity').innerText = `Humidity: ${humidity}`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${windSpeed} km/h`;
}


console.log(fetchWeather('los angeles'));