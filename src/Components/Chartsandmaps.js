import React, { useEffect, useState } from "react";
import { MapContainer, Popup } from "react-leaflet";
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const [data, setData] = useState([]);

  const [countries, setCountries] = useState(new Set());

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const labels = data.map((item) => item.country);
    const activeCases = data.map((item) => item.active);
    const recoveredCases = data.map((item) => item.recovered);
    const deaths = data.map((item) => item.deaths);
  
    // Get the existing chart instance, if any
    const existingChart = Chart.getChart("myChart");
  
    // If the chart already exists, destroy it before creating a new one
    if (existingChart) {
      existingChart.destroy();
    }
  
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Active Cases",
            data: activeCases,
            borderColor: "blue",
            fill: false,
          },
          {
            label: "Recovered Cases",
            data: recoveredCases,
            borderColor: "green",
            fill: false,
          },
          {
            label: "Deaths",
            data: deaths,
            borderColor: "red",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "COVID-19 Cases",
          },
        },
      },
    });
  }, [data]);
  

  return (
    <div>
      <canvas id="myChart" width="1200" height="700"></canvas>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: "600px" }}>
      {data.map((item) => {
        const { country, active, recovered, deaths} = item;

        // Only add a marker if the country has not already been added
        if (countries.has(country)) {
          return null;
        }

        setCountries((prevCountries) => prevCountries.add(country));

        return (
            <Popup>
              <div>
                <h3>{country}</h3>
                <p>Active Cases: {active}</p>
                <p>Recovered Cases: {recovered}</p>
                <p>Deaths: {deaths}</p>
              </div>
            </Popup>
        );
      })}
    </MapContainer>
    </div>
  );
};

export default Dashboard;
