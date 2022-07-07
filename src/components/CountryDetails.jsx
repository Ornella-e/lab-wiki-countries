import React from 'react'

export default function CountryDetails({id, match, location, history}) {
  return (
    <div className='country'>
  <p>{match}</p>
  <p>{location}</p>
  <p>{history}</p>
    </div>
  )
}
