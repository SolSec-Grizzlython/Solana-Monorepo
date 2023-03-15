import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContestForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [duration, setDuration] = useState("");
    const [prizePool, setPrizePool] = useState("");
    const [repoLink, setRepoLink] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const contest = {
            name,
            description,
            startDate,
            duration,
            prizePool,
            repoLink
           
        };
        let token = localStorage.getItem('token');
        axios.post('http://localhost:4000/contest/create', {contest, headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <h1>Create a Contest</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input type="text" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="prizePool">Prize Pool</label>
                    <input type="text" name="prizePool" value={prizePool} onChange={(e) => setPrizePool(e.target.value)} />
                </div>  
                <div>
                    <label htmlFor="repoLink">Repo Link</label>
                    <input type="text" name="repoLink" value={repoLink} onChange={(e) => setRepoLink(e.target.value)} />
                </div>
                
                <button type="submit">Submit</button>
            </form> 
        </div>
    );
}
