import {useEffect, useState} from "react";

const CountryDetail = ({ country }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (!country.capital || country.capital.length === 0) return;
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const capital = country.capital[0];
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(capital)}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setWeather(data));
    }, [country]);

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital: {country.capital && country.capital[0]}</div>
            <div>area: {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {country.languages &&
                    Object.values(country.languages).map(lang => (
                        <li key={lang}>{lang}</li>
                    ))}
            </ul>
            <img src={country.flags.png} alt="flag" width="100" />
            <h3>Weather in {country.capital && country.capital[0]}</h3>
            {weather && weather.main ? (
                <div>
                    <div>temperature: {weather.main.temp} °C</div>
                    <div>weather: {weather.weather[0].description}</div>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
                    <div>wind: {weather.wind.speed} m/s</div>
                </div>
            ) : (
                <div>Loading weather...</div>
            )}
        </div>
    )
}

export default CountryDetail;