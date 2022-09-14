import React from "react";

function WeatherForecast({ img, conditions, time }) {
  return (
    <div className="weather">
      <img src={img} alt="" />
      <p> {conditions}</p>
      <p> {time}</p>
    </div>
  );
}

export default WeatherForecast;
