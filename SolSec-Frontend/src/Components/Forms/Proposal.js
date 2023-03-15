import { React, useState } from "react";
import DatePicker from "react-datepicker";
import InputBox from "../InputBox/InputBox";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


import style from "./Proposal.module.css";
import "react-datepicker/dist/react-datepicker.css";

const Proposal = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [duration, setDuration] = useState("");
    const [prizePool, setPrizePool] = useState("");
    const [repoLink, setRepoLink] = useState(""); 
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const contest = {
            name,
            description,
            startDate,
            duration,
            prizePool,
            repoLink,
            email
           
        };
        let token = localStorage.getItem('token');
        axios.post('http://localhost:4000/contest/create', {contest, headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
        navigate('/');
    };

    return (
        <>
            <div className={style.container}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <h1>About the Protocol</h1>

                    <label>Email ID</label>
                    <InputBox onChange={(e) => setEmail(e.target.value)}/>
                    <h1>About the Competition</h1>
                    <label>Name of the Competition</label>
                    <InputBox onChange={(e) => setName(e.target.value)}/>
                    <label>Description of the Competition</label>
                    <InputBox onChange={(e) => setDescription(e.target.value)}/>
                    <label>Repository Link</label>
                    <InputBox onChange={(e) => setRepoLink(e.target.value)}/>
                    <label>Total Prize Pool (USDC) </label>
                    <InputBox onChange={(e) => setPrizePool(e.target.value)}/>
                    <div className={style.aboutComp}>
                        <div >
                            <label>Start Date</label>
                            <DatePicker className={style.dateinput} selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div >
                            <label>Duration</label>
                            <InputBox onChange={(e) => setDuration(e.target.value)}/>
                        </div>
                    </div>
                    {/* <h1>% Distribution</h1>
                    <div className={style.aboutComp}>
                        <div>
                            <label> High Findings</label>
                            <InputBox />
                        </div>
                        <div>

                            <label>Low Findings</label>
                            <InputBox />
                        </div>
                    </div>
                    <div className={style.aboutComp}>
                        <div>
                            <label>Quality Assurance Report Link</label>
                            <InputBox />
                        </div>
                        <div>

                            <label>Gas Report Link</label>
                            <InputBox />
                        </div>
                    </div> */}

                    <div className={style.footer}>
                        <button type="submit" className={style.footerleft}>Submit</button>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Proposal;