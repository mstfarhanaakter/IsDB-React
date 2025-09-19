import React, { useState } from 'react';




const Country = ({country}) => {
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

    // setVisited(!visited)

    setVisited(visited? false : true)


    
}

    return (
        <div className={`border-2 p-3 border-pink-500 ${visited? 'bg-amber-400': 'not-visited'} `}>
           <img src={country.flags.flags.png} alt="" /> 
           <p>Name: {country.name.common} </p>
           <p>Population: {country.population.population} </p>
           <p>Area: {country.area.area} </p>
           <br />
           <button onClick={handleVisited}>{visited? 'Visited': 'Not Visited'}</button>
        </div>
    );
};

export default Country;