import React from 'react';
import Navbar from '../Navbar/Navbar';

import "./Judging.css";

export default function FindingForm() {
    return (

        <>
            <Navbar />
            <div className='container'>
                <div className='title'>
                    <h1>Apply to be a Judge</h1>
                    <p>Start a constest by simply filling the form below or apply for a practice competition
                        You need to stake 20 USD to submit the proposal</p>
                </div>
                <div className='main'>
                    <form className="form">
                        <h1>About You</h1>
                        <label>Name</label>
                        <input placeholder='Enter Your Full Name' />
                        <label>Email ID</label>
                        <input placeholder='Enter Your Email ID' />
                        <label>Github Link</label>
                        <input placeholder='Enter Your Github Link' />
                        <label>Wallet Address </label>
                        <input placeholder='Enter Your Wallet Address' />
                        <label>Twitter Handle</label>
                        <input placeholder='Enter Your Twitter Handle' />
                        <label>LinkedIn</label>
                        <input placeholder='Enter Your LinkeIn URL' />
                        <label>Discord ID</label>
                        <input placeholder='Enter Your Discord ID' />
                        <label>Resume</label>
                        <button type='submit' className="resume">+ Attach File</button>
                        <div className='checkbox'>
                            <input type="checkbox" />
                            <p>I ensure that all the facts stated above are true SolSec has the full right to keep the staked amount incase I am found using unfair means of judging or being partial with the contestants  </p>
                        </div>
                        <div className='footer'>
                            <button className='footerButton'>Submit</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}