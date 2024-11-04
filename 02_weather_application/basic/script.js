document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=548f7cc4e3de57eac3dff6adbbaa6a50`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById('weatherInfo').innerHTML = `
                        <h2>Weather in ${data.name}</h2>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Conditions: ${data.weather[0].description}</p>
                    `;
                } else {
                    alert('City not found. Please enter a valid city name.');
                }
            })
            .catch(() => {
                alert('Failed to fetch weather data. Please try again later.');
            });
    } else {
        alert('Please enter a city name.');
    }
});
