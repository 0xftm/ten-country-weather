const { getWeather } = require('longpd-weather-lib');

function getRandomCountryCodes() {
    const countries = [
        'US', 'IN', 'CN', 'ID', 'BR',
        'PK', 'NG', 'BD', 'RU', 'JP',
    ];

    for (let i = countries.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [countries[i], countries[j]] = [countries[j], countries[i]];
    }

    return countries.slice(0, 10);
}

async function getWeatherForTenCountries() {
    try {
        const countryCodes = getRandomCountryCodes();

        console.log('Fetching weather data for 10 random countries:');
        for (const countryCode of countryCodes) {
            const weather = await getWeather(countryCode);
            console.log(`Weather in ${weather.location.name}, ${weather.location.country}:`);
            console.log(weather.current); // or you can format and display data as you need
            console.log('--------------------------------------------');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

module.exports = getWeatherForTenCountries;
