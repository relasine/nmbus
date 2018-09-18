import React from 'react';

import '../css/BottomBar.css'

function BottomBar(props) {
  return (
    <div className="bottom-bar">
      <section className="ten-day-button button" onClick={() => {props.pageSet('tenDay')}}>
        <h4>10-Day</h4>
      </section>
      <section className="current-button button" onClick={() => {props.pageSet('current')}}>
        <h4>Current</h4>
      </section>
      <section className="seven-hour-button button" onClick={() => {props.pageSet('sevenHour')}}>
        <h4>Seven-Hour</h4>
      </section>
    </div>
  )
}

export default BottomBar;