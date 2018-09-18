import React from 'react'

import ForecastImage from './ForecastImage'
import '../css/Hourly.css';

function Hourly(props) {

  
  return (
    <section className="hourly-weather">
      <h2>{props.data.FCTTIME.civil}</h2>
      <ForecastImage  icon={props.data.icon}
                      classLabel="daily-forecast-img" />
      <h3>{Math.floor(props.data.temp.english)}°</h3>
    </section>
  )
}

export default Hourly;
