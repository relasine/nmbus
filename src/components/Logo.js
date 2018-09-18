import React, { Component } from 'react';

import '../css/Logo.css'

export default class Logo extends Component {
  constructor() {
    super()

    this.state = {
      searchState: 'inactive-search search-field',
      logoState: 'logo-box logo-active'
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

  render() {

    return (
      <div className="logo-container">
        <img src="./magnifying-glass.svg" alt="search-icon" className="search-icon" onClick={this.toggleSearch} />
        <input type="text" placeholder="city/zip" className={this.state.searchState}></input>
        <div className={this.state.logoState}>
          <img src="./thunder.svg" alt="nmbus-logo" className="logo" />
          <h2 className="brand-title">nmbus</h2>
        </div>
      </div>
    )
  }
}

