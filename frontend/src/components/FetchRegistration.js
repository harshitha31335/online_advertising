import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchRegistration = () => {
    const [res, setRes] = useState(null); // Corrected destructuring of useState

    useEffect(() => {
        if (res === null) {
            axios.get('http://localhost:8080/retrieve', {})
            .then(response => {
                setRes(response.data); // Corrected setting of state
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching registration:', error);
            });
        }
    }, [res]); // Ensures the effect runs only once on component mount

    return (
        <div>
            <h1>Registrations</h1>
            {JSON.stringify(res)}
        </div>
    );
};

export default FetchRegistration;
