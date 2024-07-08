import React, { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
    const [locationDetails, setLocationDetails] = useState(null);

    const getData = () => {
        axios.get('https://ipapi.co/json')
            .then(function (response) {
                // handle success
                setLocationDetails(response.data);
                console.log(locationDetails);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    useEffect(() => {
        getData();
    }, [])



    return (
        <div className="App main" >
            <h1>Current Location Details</h1>
            {locationDetails ? (
                <div className='content' >
                    <div className='parent' >
                        <p><strong className='mt-1' >IP:</strong>  {locationDetails.ip}</p>
                        <p><strong className='mt-1' >City:</strong> {locationDetails.city}</p>
                        <p><strong  className='mt-1' >Postal Code:</strong> {locationDetails.postal}</p>
                        <p><strong className='mt-1' >Region:</strong> {locationDetails.region}</p>
                        <p><strong className='mt-1' >Country:</strong> {locationDetails.country_name}</p>
                        <p><strong className='mt-1' >Capital:</strong> {locationDetails.country_capital}</p>
                        <p><strong className='mt-1' >Currency:</strong> {locationDetails.currency_name}</p>
                        <p><strong className='mt-1' >Population:</strong> {locationDetails.country_population}</p>
                        <p><strong className='mt-1' >Area:</strong> {locationDetails.country_area}</p>
                        <p><strong className='mt-1' >TimeZone:</strong> {locationDetails.timezone}</p>
                        <p><strong className='mt-1' >Country Code:</strong> {locationDetails.country_code}</p>
                        <p><strong className='mt-1' >Country Caling Code:</strong> {locationDetails.country_calling_code}</p>
                        <p><strong className='mt-1' >Country Domain Code:</strong> {locationDetails.country_tld}</p>
                        <p><strong className='mt-1' >Latitude:</strong> {locationDetails.latitude}</p>
                        <p><strong className='mt-1' >Longitude:</strong> {locationDetails.longitude}</p>
                        <p><strong className='mt-1' >Network :</strong> {locationDetails.org}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
