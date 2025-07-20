import { useState, useEffect } from "react";
import axios from "axios";
import CountryDetail from "./components/CountryDetail";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all?fields=name,capital,area,languages,flags,cca3')
            .then(response => setCountries(response.data));
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        setSelectedCountry(null);
    };

    const handleShowCountry = (country) => {
        setSelectedCountry(country);
    };

    const countriesToShow = filter ? countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
    ) : [];

    return (
        <div>
            <div>
                find countries <input value={filter} onChange={handleFilterChange} />
            </div>
            <div>
                {countriesToShow.length > 10 && (
                    <div> Too many matches, specify another filter</div>
                )}
                {countriesToShow.length <= 10 && countriesToShow.length > 1 && (
                    <ul>
                        {countriesToShow.map(country => (
                            <li key={country.cca3}>
                                {country.name.common}
                                <button onClick={() => handleShowCountry(country)}>show</button>
                            </li>
                        ))}
                    </ul>
                )}
                {countriesToShow.length === 1 && (
                    <CountryDetail country={countriesToShow[0]} />
                )}
                {selectedCountry && (
                    <CountryDetail country={selectedCountry} />
                )}
            </div>
        </div>
    )
}

export default App;