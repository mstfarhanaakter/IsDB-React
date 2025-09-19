import React, { use, useState } from 'react';
import Country from '../country/Country';




const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const data = countriesData.countries

    console.log(countriesData)


    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log("handle Vistied Countries clicked")
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)

    }

    const [vistitedFlags, setVistiedFlags] = useState([])
    const handlevistiedFlags = (country) => {
        console.log("visited flag clicked")
        const newVisitedFlag = [...vistitedFlags, country]
        setVistiedFlags(newVisitedFlag)
    }

    return (
        <div>
            <h1 className='text-[12px]'>Total Countries: {data.length} </h1>
            <p>Total Country Visited: {visitedCountries.length} </p>
            {/* <ol className='list-decimal'>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
                
            </ol> */}

            <p>Total Flag Visited: {vistitedFlags.length} </p>
            <div className='w-[100px] flex gap-3'>
                {
                    vistitedFlags.map((flag, index) => <img key={index} src={flag} />)
                }
            </div>

            <div className='grid grid-cols-3 gap-4 p-2'>
                {
                    data.map((country) =>
                        <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handlevistiedFlags={handlevistiedFlags}

                        >
                        </Country>)
                }


            </div>




        </div>
    );
};

export default Countries;