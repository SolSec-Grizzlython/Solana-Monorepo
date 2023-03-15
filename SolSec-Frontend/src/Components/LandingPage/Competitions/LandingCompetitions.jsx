import "./LandingCompetitions.css";
import CompetitionsCard from "./CompetitionsCards/CompetitionsCard";
import Data from "./Card_data";
import {FaChevronRight} from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function LandingCompetitions() {
  var cardInfo = Data.card;
  return (
    <>
      <section
        className="landing-competitions-container"
        id="landing-competition"
      >
        <div className="landing-competitions-box">
          <div className="landing-competitions-head">
            <h1 className="landing-competitions-heading">Start Competing</h1>
            <Link to="/competitions"><FaChevronRight className="event-right-arrow-btn"/></Link>
            
          </div>
          <div className="landing-competitions-cards">
            <div className="grid">
              {cardInfo.map((e, index) => {
                return (
                  <CompetitionsCard
                    index={index}
                    name={e.name}
                    details={e.details}
                    image={e.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
