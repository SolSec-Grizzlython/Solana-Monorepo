import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Contest() { 
    const [contest, setContest] = useState();
    const [contestStatus, setContestStatus] = useState();
    const [currentUser, setCurrentUser] = useState();
    const { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post(`http://localhost:4000/contest/get/${id}`,{contest, headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            setContest(res.data.data.contest);
            setContestStatus(res.data.data.contest.contestStatus);
            console.log(res.data.user);
            setCurrentUser(res.data.user);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    , []);

    const startContest = () => {
        axios.patch(`http://localhost:4000/contest/start/${id}`)
        .then((res) => {
            setContestStatus(res.data.data.contest.contestStatus);

            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    const endContest = () => {
        axios.patch(`http://localhost:4000/contest/stop/${id}`)
        .then((res) => {
            setContestStatus(res.data.data.contest.contestStatus);
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const participate = () => {
        axios.patch(`http://localhost:4000/auditor/participate/${id}/${currentUser._id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <h1>{contest?.name}</h1>
            <p>{contest?.description}</p>
            <p>The status of the contest is : {contestStatus}</p>
            

            {/* Only for Protocol */}
            {contestStatus < 3 && currentUser.role === 'protocol' ? (<button onClick={startContest}>Start</button>) : (null)}
            {(contestStatus === 3 && currentUser.role === 'protocol')? (<button onClick={endContest}>End</button>) : (null)}

            {/* Only for auditors */}
            {contestStatus === 3 && currentUser.role === 'auditor' ? (<button onClick={participate}>Participate</button>) : (null)
            }
        </div>
    );
}
