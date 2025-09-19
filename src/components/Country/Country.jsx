import React, { useState } from 'react';




const Country = ({country, handleVisitedCountries, handlevistiedFlags}) => {
    console.log(country)

    const [visited, setVisited] = useState (false)

const handleVisited = ()=> {

    //basic structure
    // if (visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }
    
    //2nd step
    // setVisited(!visited)

    //3rd step
    setVisited(visited? false : true)
    handleVisitedCountries(country)
    


    
}

    return (
        <div className={`border-2 p-3 rounded-[12px] space-y-2 border-blue-500 ${visited? 'bg-amber-400': 'not-visited'} `}>
           <img src={country.flags.flags.png} alt={country.flags.flags.alt } /> 
           <p>Name: {country.name.common} </p>
           <p>Capital: {country.capital.capital}</p>
           <p>Population: {country.population.population} </p>
           <p>Area: {country.area.area} {country.area.area >250000 ? 'Big Country': 'Small Country'}</p>
           <br />
           <div className='flex gap-4'>
            <button onClick={handleVisited}>{visited? 'Visited': 'Not Visited'}</button>
           <button onClick={() => {handlevistiedFlags(country?.flags?.flags?.png)}} >Add Visited Flag</button>
           </div>
           
        </div>
    );
};

export default Country;