import React from 'react';

import ForecastImage from './ForecastImage';
import '../css/Current.css';


function Current(props) {

  return (
    <div className={props.classSetting}>
        <h3 className='current-location'>{props.data.current_observation.display_location.full}</h3>
      <section className='current-weather-data'>
        <aside className="weather-img-aside">
          <ForecastImage icon={props.data.current_observation.icon}
                         classLabel="weather-img"/>
          <h2 className="weather-description">{props.data.current_observation.weather}</h2>
        </aside>
        <article className="current-weather-right-container">

          <h1 className="temperature">{Math.floor(props.data.current_observation.temp_f)}°</h1>
          <h2 className="wind"><span className="weather-label wind-data">Wind - </span>{props.data.current_observation.wind_dir} {props.data.current_observation.wind_mph} mph</h2>
          <h2 className="humidity"><span className="weather-label humidity-data">Humidity - </span> {props.data.current_observation.relative_humidity}</h2>
          <h2 className="highlow"><span className="weather-label high-low">High/Low - </span> {props.data.forecast.simpleforecast.forecastday[0].high.fahrenheit}°/{props.data.forecast.simpleforecast.forecastday[0].low.fahrenheit}°</h2>
        </article>
      </section>
    </div>
  )
}

export default Current;
