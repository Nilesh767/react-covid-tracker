import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

export const sortData = (data) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0,0")}` : "+0";

const casesTypeColors = {
  cases: {
    multiplier: 200,
    option: { color: "#fb4443", fillColor: "#fb4443" },
  },
  recovered: {
    multiplier: 200,
    option: { color: "#7dd71d", fillColor: "#7dd71d" },
  },
  deaths: {
    multiplier: 1500
    ,
    option: { color: "#800000", fillColor: "#800000" },
  },
};

export const showDataOnMap = (data, casesType = "cases") => {
  return data.map((country, i) => (
    <Circle
      key={i}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.2}
      pathOptions={casesTypeColors[casesType].option}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};
