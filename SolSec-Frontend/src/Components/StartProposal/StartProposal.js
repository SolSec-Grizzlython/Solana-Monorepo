import React from "react";
import Proposal from "../Forms/Proposal";
import Navbar from "../Navbar/Navbar";
import style from "./StartProposal.module.css";

const StartProposal = () => {
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <div className={style.heading}>
                    <h1>Submit a Proposal</h1>
                    <p>Start a constest by simply filling the form below or apply for a practice competition
                        You need to stake 20 USD to submit the proposal</p>
                    <Proposal />
                </div>
            </div>
        </>
    )
}

export default StartProposal;