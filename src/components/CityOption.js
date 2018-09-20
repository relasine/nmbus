import React from 'react';

function CityOption(props){
  return (
    <li 
      className='city-name' 
      value={props.city}
      onClick={(event) => {
        props.fetchCall(event.target.innerText);
        props.resetCities();
      }}
    >{props.city}
    </li>
  )
}

export default CityOption;

