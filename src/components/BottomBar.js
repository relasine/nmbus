import React from 'react';

import '../css/BottomBar.css'

function BottomBar(props) {
  return (
    <div className="bottom-bar">
      <section className={props.tenDayButton} onClick={() => {
          props.pageSet('tenDay')
        }}>
        <h4>10-Day</h4>
      </section>
      <section className={props.currentButton} onClick={() => {props.pageSet('current')}}>
        <h4>Current</h4>
      </section>
      <section className={props.sevenHourButton} onClick={() => {props.pageSet('sevenHour')}}>
        <h4>Seven-Hour</h4>
      </section>
    </div>
  )
}

export default BottomBar;