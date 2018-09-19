import React, { Component } from 'react';

import CityOption from './CityOption'

import '../css/Logo.css'

export default class Logo extends Component {
  constructor() {
    super()

    this.state = {
      searchState: 'inactive-search search-field',
      logoState: 'logo-box logo-active',
      cityArray: [],
      dataListState: 'city-select city-none'
    }
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    if (this.state.searchState === 'active-search search-field') {
      this.setState({
        searchState: 'inactive-search search-field',
        logoState: 'logo-box logo-active'
      })
    } else {
      this.setState({
        searchState: 'active-search search-field',
        logoState: 'log-box logo-inactive'
      })
    }
  }

  runSuggest(event) {
    let cityList;

    if (!parseInt(event.target.value, 10) && event.target.value.length > 1) {
    const wordArray = event.target.value.split('');
    const upperCaseFirst = wordArray.shift().toUpperCase();
    wordArray.unshift(upperCaseFirst);
    cityList = this.props.trie.suggest(wordArray.join(''))
    }

    console.log(cityList)

    if (cityList) {
      this.setState({
        cityArray: cityList,
        dataListState: 'city-select'
      })
    } else {
      this.setState({
        cityArray: [],
        dataListState: 'city-select city-none'
      })
    }
  }

  render() {

    return (
      <div className="logo-container">
        <img src="./magnifying-glass.svg" alt="search-icon" className="search-icon" onClick={this.toggleSearch} />
        <input 
          list="city-list"
          type="text" 
          placeholder="city/zip" 
          className={this.state.searchState} 
          onChange={(event) => {this.runSuggest(event)}}>
        </input>
        <datalist id="city-list" className={this.state.dataListState}>
          {this.state.cityArray.length &&
            this.state.cityArray.map((city) => {
              return <CityOption key={city} city={city} />
            })}
        </datalist>
        <div className={this.state.logoState}>
          <img src="./thunder.svg" alt="nmbus-logo" className="logo" />
          <h2 className="brand-title">Nimbus Weather</h2>
        </div>
      </div>
    )
  }
}

