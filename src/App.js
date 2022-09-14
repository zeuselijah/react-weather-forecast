import React from "react";
import "./styles.css";

import weatherArr from "../weatherData";
import WeatherForecast from "./components/WeatherForecast.js";

console.log({ weatherArr });
export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {weatherArr.map((weather) => (
          <WeatherForecast {...weather} />
        ))}
        ;
      </section>
    </div>
  );
}
