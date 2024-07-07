import React from 'react';
import './CountryCard.css';
import IconComponent from '../icons/IconComponent';
import { useLocation } from 'react-router-dom';



const CountryCard = ({country}) => {

  

  const handleClick = () => {

  }


  return (
    <div className="country-card" onClick={handleClick}>
      <img src={`${country?.flags?.svg}`} alt={`${country?.name[0]} flag`} />
      <h2>{country?.name[0]}</h2>


      {/* card-line */}
      <div className='card-line'>
        <IconComponent iconName="faPeopleGroup" />
        <p>{country?.population}</p>
      </div>

      <div className='card-line'>
        <IconComponent iconName="faDollarSign" />
        
        <p>{country?.currencies != undefined ?country?.currencies[Object.keys(country?.currencies)[0]]?.symbol:"not found"}</p>
      </div>
    </div>
  );
};

export default CountryCard;
