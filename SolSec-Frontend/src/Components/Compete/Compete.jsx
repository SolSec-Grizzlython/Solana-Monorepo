import Navbar from "../Navbar/Navbar";
import React, { useState, useEffect } from 'react';
import "./Compete.css";
import image from "./grizzlythonLogo.jpeg";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Compete() {
  const Data = {
    prize: "$20,000",
    startdate: "20th March 2021",
    enddate: "20th March 2021",
    duration: "20th March 2021",
  };
  const Prize = {
    pool:" $250 USDC",
    HMawards: "$50 USDC",
    QAawards:"$200 USDC",
    gasAwards:"$0 USDC"
  }

    const [contest, setContest] = useState("");
    const [contestStatus, setContestStatus] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post(`http://localhost:4000/contest/get/${id}`,{contest, headers: {Authorization: `Bearer ${token}`}})
        .then((res) => {
            setContest(res.data.data.contest);
            setContestStatus(res.data.data.contest.contestStatus);
            console.log(res.data.user);
            setCurrentUser(res.data.user);
            console.log("this is the c",contest);
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
    <>
      <Navbar />
      <section className="compete-container">
        <div className="compete-box">
          <div className="competition-name">{contest.name}</div>

          {contestStatus >= 6 ? (<div className="competition-status">PAST</div>): (null)}
          {contestStatus === 3 ? (<div className="competition-status">Live</div>): (null)}
          {contestStatus >1 && contestStatus<3 ? (<div className="competition-status">Upcoming</div>): (null)}

          {/* <div className="competition-status">PAST</div> */}
          <div className="competition-details">
            <div className="protocol-details">
              <img className="protocol-img" src={image} alt="" />
              <div className="protocol-content">
                <div className="details-header">Details</div>
                <div className="prizes-veticleLine">
                  <div className="big-vertical-line"></div>
                  <div className="proposal-prizes">
                    Total Prize Pool: {Prize.pool} <br /> HM awards: {Prize.HMawards}
                    <br />
                    QA report awards: {Prize.QAawards} <br />
                    Gas report awards: {Prize.gasAwards}
                  </div>
                </div>
                <div className="note-header">Note</div>
                <div className="proposal-detail-content"> {contest.description}</div>
              </div>
            </div>
            <div className="price-details">
              <div className="pool-prize">Prize Pool: ${contest.prizePool}</div>
              <div className="competition-dates">
                <div className="vertical-line"></div>
                <div className="competition-duration">
                  {" "}
                  Start Date: {contest.startDate} <br /> {" "}
                   Duration: {contest.duration} Days{" "}
                </div>
              </div>
              <div className="buttons">
              {contestStatus>1 && contestStatus < 3 && currentUser.role === 'auditor' ? (<button className="findings" onClick={participate}>Participate</button>) : (null)}
                {contestStatus === 3 && currentUser.role === 'auditor' ? (<button className="findings" onClick={participate}>
                  <Link className="findingform" to="/findingform">
                    Submit Findings
                  </Link>
                </button>) : (null)}
                <a href={`//${contest.repoLink}`}><button className="repository">View Repository</button></a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
