import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Contests() {
    const [contests, setContests] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:4000/contest/getAll')
        .then((res) => {
            setContests(res.data.data.contests );
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    // console.log("here are the contests", contests );
    
    return (
        <div>
        <h1>Contests</h1>
        {contests.map((contest) => (
            <div key={contest._id}>
            <Link to={"/contest/"+ contest._id}>{contest.name}</Link>
            <p>{contest.description}</p>
            <p>The status of the contest is : {contest.contestStatus}</p>
            </div>
        ))}
        {/* Only for protocol */}
        {/* Implement conditional rendering  */}
        <Link to="/createContest"> Create Contest</Link>
        </div>
    );
    }