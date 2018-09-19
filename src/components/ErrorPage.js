import React from 'react';

import '../css/ErrorPage.css'

import ForecastImage from './ForecastImage'
 
function ErrorPage(props) {

  return (

    <div className="error-page">
      <ForecastImage icon="unknown" />
      <h3 className="error-text">Location not found</h3>
      <h3 className="error-text">Please enter a new location</h3>
    </div>

  )
}

export default ErrorPage;