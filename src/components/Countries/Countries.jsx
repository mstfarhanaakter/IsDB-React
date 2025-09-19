import React, { use } from 'react';
import Country from '../country/Country';




const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const data = countriesData.countries

    console.log(countriesData)
    

    // const [visitedCountries, setVisitedCountries] = useState([])
    
    return (
        <div>
            <h1 className='text-[12px]'>Total Countries: {data.length} </h1>
            <div className='grid grid-cols-3 gap-4 p-2'>
        {
            data.map((country) => <Country country={country}>
            </Country>)
        }
                

            </div>

            
            
            
        </div>
    );
};

export default Countries;