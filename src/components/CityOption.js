import React from 'react';



function CityOption(props){
  return (
    <option className='city-name' value={props.city}>{props.city}</option>
  )
}

export default CityOption;

