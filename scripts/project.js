const fetchWeather = async (city) => {
    const apiKey = '06071430f069356a80e6bd0df9f246d0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        updateWeatherDashboard(data);
    } catch (error) {
        console.error(error);
        document.querySelector('#weather-display').innerHTML = `<p>${error.message}</p>`;
    }
};

const updateWeatherDashboard = (weatherData) => {
    const conditionsHtml = weatherData.weather.map(condition => 
        `<p>Condition: ${condition.description}</p>`
    ).join('');

    const weatherHtml = `
        <div class="weather-info">
            <h2>${weatherData.name}</h2>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            ${conditionsHtml}
        </div>
    `;
    document.querySelector('#weather-display').innerHTML = weatherHtml;
};

document.querySelector('#search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    fetchWeather(city);
});


