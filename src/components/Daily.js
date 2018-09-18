import React from 'react'

import ForecastImage from './ForecastImage'
import '../css/Daily.css';

function Daily(props) {

  return (
    <section className="daily-weather">
      <h2>{props.data.date.weekday}</h2>
      <ForecastImage icon={props.data.icon} classLabel="daily-forecast-img" />
      <h3 className="daily-temps">{props.data.high.fahrenheit}° / {props.data.low.fahrenheit}°</h3>
    </section>
  )

}

export default Daily;
