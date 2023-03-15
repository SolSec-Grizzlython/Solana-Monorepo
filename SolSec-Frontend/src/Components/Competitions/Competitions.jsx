import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import "./Competitions.css";
import { Link } from 'react-router-dom';

import CompetitionCard from "./CompetitionCards/CompetitionCard";


export default function Competitions() {
  const [contests, setContests] = React.useState([]);
  const [ongoingContests, setOngoingContests] = React.useState([]);
  const [upcomingContests, setUpcomingContests] = React.useState([]);
  const [pastContests, setPastContests] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/contest/getAll')
    .then((res) => {
        console.log("Hereeeee");
        console.log(res.data.data.contests);
        setContests(res.data.data.contests );
        res.data.data.contests.filter((contest) => {
          // console.log("Ongoing contests are ",ongoingContests);
          // console.log("Upcoming contests are ",upcomingContests);
          // console.log("Past contests are ",pastContests);
          if(contest.contestStatus === 3 && ongoingContests.length < 2) {
            setOngoingContests(ongoingContests => [...ongoingContests, contest]);
          }
          else if(contest.contestStatus === 2) {
            setUpcomingContests(upcomingContests => [...upcomingContests, contest]);
          }
          else if(contest.contestStatus === 6) {
            setPastContests(pastContests => [...pastContests, contest]);
          }
        }
    )}
    )

    .catch((err) => {
        console.log(err);
    });
}, []);

  const placeholderData = [
    {
      heading: "AB",
      prize: "70000",
      startdate: "26 Jun, 2021 03:00 PM",
      duration: " 12",
      desc: "ajdkghjkah",
    },
    {
      heading: "CD",
      prize: "70000",
      startdate: "26 Jun, 2021 03:00 PM",
      duration: " 12",
      desc: "ajdkghjkah",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="competitions-container">
        <div className="start-competing-container">
          <div className="competition-heading">Start Competing</div>
          <div className="competitions-box">
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Ongoing Competitions</p>
                </div>
              </div>
              <div className="card-mapping">
                {ongoingContests.map((contest) => (
                  <Link to={"/compete/"+ contest._id}>
                  <div className="competitions-card">
                    <CompetitionCard
                      heading={contest.name}
                      prize={contest.prizePool}
                      startdate={contest.startDate}
                      duration={contest.duration}
                      desc={contest.description}
                    />
                  </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Practice Competitions</p>
                </div>
              </div>
              <div className="card-mapping">
                {placeholderData.map((contest) => (
                  <div className="competitions-card">
                    <CompetitionCard
                      heading={contest.heading}
                      prize={contest.prize}
                      startdate={contest.startdate}
                      duration={contest.duration}
                      desc={contest.desc}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Upcoming Competitions</p>
                </div>
              </div>
              <div className="card-mapping">
                {upcomingContests.map((contest) => (
                  <Link to={"/compete/"+ contest._id}>  
                  <div className="competitions-card">
                    <CompetitionCard
                      heading={contest.name}
                      prize={contest.prizePool}
                      startdate={contest.startDate}
                      duration={contest.duration}
                      desc={contest.description}
                    />
                  </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="competitions-info">
              <div className="competition-header-card">
                <div className="header-container">
                  <p className="header-content">Past Competitions</p>
                </div>
              </div>
              <div className="card-mapping">
                {pastContests.map((contest) => (
                  <Link to={"/compete/"+ contest._id}>
                  <div className="competitions-card">
                    <CompetitionCard
                      heading={contest.name}
                      prize={contest.prizePool}
                      startdate={contest.startDate}
                      duration={contest.duration}
                      desc={contest.description}
                    />
                  </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
