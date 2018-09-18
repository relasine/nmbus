import React, { Component } from 'react';

import Logo from './Logo'
import Current from './Current'
import SevenHour from './SevenHour'
import BottomBar from './BottomBar'
import data from '../fakeapi'

import '../css/App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data.data,
      currentState: 'inactive current',
      sevenHourState: 'active seven-hour',
      tenDayState: 'inactive ten-day',
      activeButton: 'current-button-active bottom-bar'
    }
    this.pageSet = this.pageSet.bind(this);
}

pageSet(page) {
  console.log(page)
  if (page === 'current' && this.state.currentState !== 'active current') { 
    console.log('setting')
    this.setState({
      currentState: 'active current',
      sevenHourState: 'inactive seven-hour',
      tenDayState: 'inactive ten-day', 
      activeButton: 'current-button-active bottom-bar' 
    });
  } else if (page === 'sevenHour' && this.state.sevenHourState !== 'active seven-hour') {
    this.setState({
      sevenHourState: 'active seven-hour',
      currentState: 'inactive current',
      tenDayState: 'inactive ten-day',
      activeButton: 'seven-hour-button-active bottom-bar'
    });
  } else if (page === 'tenDay' && this.state.tenDayState !== 'active ten-day') {
    this.setState({
      currentState: 'inactive current',
      sevenHourState: 'inactive seven-hour',
      tenDayState: 'active ten-day', 
      activeButton: 'ten-day-button-active'
    });
  }
}


  render() {

    return (
      <div className="App">
        <Logo />
        <Current classSetting={this.state.currentState} data={this.state.data} />
        <SevenHour classSetting={this.state.sevenHourState} data={this.state.data} />
        <BottomBar pageSet={this.pageSet}/>
      </div>
    );
  }
}


export default App;
