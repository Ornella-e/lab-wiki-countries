import React, {useState} from "react";
import countriesData from "../countries.json"
import CountryDetails from "../components/CountryDetails"
import {Link} from "react-router-dom"

export default function CountriesList(){
    const [countries, setCountries] = useState(countriesData);
    
    const handleDelete = (id) => {
        setCountries(countries.filter(country => country.id !== id));
    }
    const handleClean = () =>{setCountries([]);}

    const displayCountries = () => {
        return(
        countries.map((country)=>{
            return(<CountryDetails 
                key={country.id}
                {...country}
                handleDelete={handleDelete}
                />)
        })
        )
    }
    return(
        <>
        <div className="countries-list">
          {displayCountries()}  
        </div>
        <div>
        
        </div>
        </>
    );
}