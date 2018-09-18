import React from 'react';

import Hourly from './Hourly'
import '../css/SevenHour.css';

function SevenHour(props) {
  const sevenHourProps = props.data.hourly_forecast.slice(0, 7);

  return (
    <article className={props.classSetting}>
      {sevenHourProps.map((time) => {
        return <Hourly  data={time}
                        key={time.FCTTIME.hour} />
      })}
    </article>
  );
}

export default SevenHour


