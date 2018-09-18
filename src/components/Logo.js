import React from 'react';

import '../css/Logo.css'

function Logo() {
  return (
    <div className="logo-container">
      <img src="./thunder.svg" alt="nmbus-logo" className="logo" />
      <h2 className="brand-title">nmbus</h2>
    </div>
  )
}

export default Logo;