import React, { Component } from 'react';

import Logo from './Logo'
import Current from './Current'
import SevenHour from './SevenHour'
import TenDay from './TenDay'
import BottomBar from './BottomBar'
// import data from '../fakeapi'
import apikey from '../apikey';

import '../css/App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: undefined,
      currentState: 'active-current current',
      sevenHourState: 'inactive-seven-hour seven-hour',
      tenDayState: 'inactive-ten-day ten-day',
      currentButton: 'current-button-active current-button button',
      tenDayButton: 'ten-day-button ten-day-button-inactive button',
      sevenHourButton: 'seven-hour-button seven-hour-button-inactive button'
    }
    this.pageSet = this.pageSet.bind(this);
}

pageSet(page) {
  if (page === 'current' && this.state.currentState !== 'active current') { 
    this.setState({
      currentState: 'active current',
      sevenHourState: 'inactive-seven-hour seven-hour',
      tenDayState: 'inactive-ten-day ten-day', 
      currentButton: 'current-button-active current-button button',
      tenDayButton: 'ten-day-button ten-day-button-inactive button',
      sevenHourButton: 'seven-hour-button seven-hour-button-inactive button'    });
  } else if (page === 'sevenHour' && this.state.sevenHourState !== 'active seven-hour') {
    this.setState({
      sevenHourState: 'active seven-hour',
      currentState: 'inactive-current current',
      tenDayState: 'inactive-ten-day ten-day',
      currentButton: 'current-button-inactive current-button button',
      tenDayButton: 'ten-day-button ten-day-button-inactive button',
      sevenHourButton: 'seven-hour-button seven-hour-button-active button'    });
  } else if (page === 'tenDay' && this.state.tenDayState !== 'active ten-day') {
    this.setState({
      currentState: 'inactive-current current',
      sevenHourState: 'inactive-seven-hour seven-hour',
      tenDayState: 'active ten-day', 
      currentButton: 'current-button-inactive current-button button',
      tenDayButton: 'ten-day-button ten-day-button-active button',
      sevenHourButton: 'seven-hour-button seven-hour-button-inactive button'    });
  }
}

componentDidMount() {
    fetch(`http://api.wunderground.com/api/${apikey}/conditions/hourly/forecast10day/q/autoip.json`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        current: true,
        data: data
      });
    })
}


  render() {
    if(this.state.data) {
      return (
        <div className="App">
          <Logo />
          <Current 
            classSetting={this.state.currentState} 
            data={this.state.data}
          />
          <SevenHour 
            classSetting={this.state.sevenHourState} 
            data={this.state.data} 
          />
          <TenDay classSetting={this.state.tenDayState} data={this.state.data} />
          <BottomBar 
            pageSet={this.pageSet} 
            currentButton={this.state.currentButton}
            tenDayButton={this.state.tenDayButton}
            sevenHourButton={this.state.sevenHourButton}
          />
        </div>
      );
    } else {
      return (<div></div>)
    }
  }
}


export default App;
