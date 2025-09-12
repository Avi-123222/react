import React from 'react'
import countriesData from '../CountriesData.js'
import CountryCard from './CountryCard.jsx'

export default function CountriesList() {
  return (
     <div className="countries-container">
      {
       countriesData.map((country, idx) => <CountryCard key={idx} 
       flag={country.flags.svg}
       name={country.name.common}
       population={country.population}
       region={country.region}
       capital={country.capital[0]}/> )
      }  
  
   </div>
  )
}


      
   
    
    