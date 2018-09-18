import React from 'react';

const weatherIcons = {
  clear: './sun.svg',
  nt_clear: './moon-phase-outline.svg',
  rain: './rainy.svg',
  nt_rain: './rainy-cloud-at-night.svg',
  chancerain: './rainy.svg',
  nt_chancerain: './rainy-cloud-at-night.svg',
  cloudy: './cloud.svg',
  nt_cloudy: './cloud.svg',
  partlycloudy: './partly-cloudy.svg',
  nt_partlycloudy: './dark-night.svg',
  mostlycloudy: './partly-cloudy.svg',
  nt_mostlycloudy: './dark-night.svg',
  snow: './snowy.svg',
  nt_snow: './snowy.svg',
  chancesnow: './snowy.svg',
  nt_chancesnow: './snowy.svg',
  chancetstorms: './t-storm.svg',
  haze: './cloud.svg',
  fog: './cloud.svg',
  tstorms: './t-storm.svg'
  };
 
function ForecastImage(props) {
  return (
    <img src={weatherIcons[props.icon]} alt={props.icon} className={props.classLabel}/>
  )
}

export default ForecastImage;