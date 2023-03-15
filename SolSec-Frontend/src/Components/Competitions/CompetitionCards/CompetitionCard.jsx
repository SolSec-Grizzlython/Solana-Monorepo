import "./CompetitionCard.css";
import React from "react";
import img from "./solanaLogo.png";

const CompetitionCard = (props) => {
  
  return (
    <div className="competition-card-container">
      <div className="competitions-card-images">
        <img className="competition-card-img" src={img} alt="" />
      </div>
      <div className="competition-card-details">
        <div className="competition-card-name">{props.heading}</div>
        <div className="competition-desc">{props.desc}</div><br />
        <div className="competition-card-content">
          ${props.prize} <br />
          Starts on: {props.startdate} <br /> Duration: {props.duration} Days
        </div>
        <button className="competition-card-btn">Start</button>
      </div>
    </div>
  );
};

export default CompetitionCard;
