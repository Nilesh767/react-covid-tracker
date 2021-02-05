import "./App.css";

import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("WorldWide");

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onChangeCountry = (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onChangeCountry} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>

            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>


      <div className="app_stats">
        Infoboxes title="corona cases"
        Infoboxes title="corona recoveries"
        Infoboxes title="corona cases"
      </div>

  {
  
  /* 
    Info

    Table
    Graph

    Map    */
  }
    </div>
  );
}

export default App;
