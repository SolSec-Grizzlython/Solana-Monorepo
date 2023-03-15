import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import "./FindingForm.css";

export default function FindingForm() {

    const navigate = useNavigate();
    const navigateToCompete = () => {
        navigate('/compete');
    }

    return (

        <>
            <Navbar />
            <div className='container'>
                <div className='main'>
                    <form className="form">
                        <h1>Submit Your Finding</h1>
                        <label>Finding Type</label>
                        <input placeholder='Select from the dropdown' />
                        <label>Heading</label>
                        <input placeholder='Enter Your Email ID' />
                        <label>Links</label>
                        <input placeholder='Enter Your Wallet Address' />
                        <div className='divs'>

                            <div className='label1'>
                                <label >Write</label>
                            </div>
                            <div className='label2'>
                                <label >Preview</label>
                            </div>


                        </div>
                        <input placeholder='Enter Quiz Instruction' />
                        <div className='footer'>
                            <button onClick={navigateToCompete} className='footerButton'>Submit</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}