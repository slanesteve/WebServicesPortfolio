function getWeather() {
    const zipCode = 30152;/*document.getElementById('zipCode').value;*/
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=34.02&longitude=-84.62&current_weather=true`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weather = data.current_weather;
            const temperatureCelsius = weather.temperature;
            const temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32;
            const windSpeedKmh = weather.windspeed;
            const windSpeedMph = windSpeedKmh * 0.621371;
            const weatherResult = document.getElementById('weatherResult');
            const weatherDescription = getWeatherDescription(weather.weathercode);
            weatherResult.innerHTML = `
                <p>Temperature: ${temperatureFahrenheit.toFixed(2)}&deg;F</p>
                <p>Wind Speed: ${windSpeedMph.toFixed(2)} mph</p>
                <p>Weather: ${weatherDescription}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function getWeatherDescription(weatherCode) {
    const weatherDescriptions = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        56: 'Light freezing drizzle',
        57: 'Dense freezing drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        66: 'Light freezing rain',
        67: 'Heavy freezing rain',
        71: 'Slight snow fall',
        73: 'Moderate snow fall',
        75: 'Heavy snow fall',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    };

    return weatherDescriptions[weatherCode] || 'Unknown weather code';
}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const body = document.body;

  

    

        link.addEventListener('mouseover', function () {
            link.style.color = 'red';
            link.style.fontWeight = 'bold';
        });

        link.addEventListener('mouseout', function () {
            link.style.color = 'white';
            link.style.fontWeight = 'normal';
        });
    });
});
