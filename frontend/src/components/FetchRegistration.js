import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchRegistration = () => {
    const [res, setRes] = useState([])

    useEffect(() => {
            axios.get('http://localhost:8080/retrieve')
            .then(response => {
                setRes(response.data)
                console.log(Response.data)
            })},
            [])

    return (
        <div><center><h1>Registrations</h1>
        <table border={1}>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
        {
            res.map((item,index)=>(
                <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                </tr>
            ))
        }
        </table>
            </center>
        </div>
    );
};

export default FetchRegistration;
