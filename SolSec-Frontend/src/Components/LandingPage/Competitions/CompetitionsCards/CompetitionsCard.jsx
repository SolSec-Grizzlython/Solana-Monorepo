import React from "react";
import { useNavigate } from "react-router-dom";
import "./CompetitionsCard.css";
// import img from "../Images/download.png";

const CompetitionsCard = ({name, details, image}) => {
  let navigate = useNavigate(); 
  
  return (
    <div className="competitions-card-container" onClick={()=>navigate("/competitions")} >
      <div className="competitions-card-images">
        <img className="competitions-card-img" src={image} alt="" />
      </div>
      <div className="competitions-card-details">
        <div className="competitions-card-name">{name}</div>
        <div className="competitions-card-content">{details}</div>
      </div>
    </div>
  );
};

export default CompetitionsCard;
