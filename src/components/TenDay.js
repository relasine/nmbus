import React from 'react';

import Daily from './Daily'

import '../css/TenDay.css'

function TenDay(props) {
  return(
    <article className={props.classSetting}>
      {props.data.forecast.simpleforecast.forecastday.map((day) => {
        return (
          <Daily key={day.period} data={day} />
        ) 
      })}
    </article>
  ) 
}

export default TenDay;