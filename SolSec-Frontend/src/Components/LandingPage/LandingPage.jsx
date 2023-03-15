import "./LandingPage.css";
import Navbar from "../Navbar/Navbar";
import { BsArrowRight } from "react-icons/bs";
import LandingCompetitons from "./Competitions/LandingCompetitions";
import LandingProposal from "./Proposal/LandingProposal";
import LandingJudge from "./Judge/LandingJudge";
import LandingContact from "./Contact/LandingContact";
import { Outlet, Link } from "react-router-dom";
import LandingImage from "./Images/Group 3.png";

export default function LandingPage() {
  return (
    <>
    <Navbar />
      <section className="landingPage-container main-container">
        <div className="landing-about-container">
          <div className="landing-about-content">
            Be a protocol, <br /> judge or a <br /> competitor
          </div>
          <img className="landing-about-white-box" src={LandingImage} alt="" />
          {/* <div className="landing-about-white-box"></div> */}
          <div className="landing-about-boxes">
            <div className="landing-about-left-box">
              <h1 className="landing-about-box-heading">Start Competing</h1>
              <p className="landing-about-box-content">View codebase and submit bug reports!</p>
              <div className="landing-about-box-arrow"> <Link className="arrow" to="/competitions"><BsArrowRight /></Link></div>
            </div>
            <div className="landing-about-center-box">
              <h1 className="landing-about-center-box-heading">Send your Proposal</h1>
              <p className="landing-about-center-box-content">Create a contest and get your codebase audited!</p> 
              <div className="landing-about-box-arrow"><Link className="arrow" to="/createContest"><BsArrowRight /></Link></div>
            </div>
            <div className="landing-about-right-box">
              <h1 className="landing-about-box-heading">Be a Judge</h1>
              <p className="landing-about-box-content">Review vulnerabilities and submit an audit report!</p>
              <div className="landing-about-box-arrow"><Link className="arrow" to="/landingJudge"><BsArrowRight /></Link></div>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-others">
        <LandingCompetitons/>
        <LandingProposal/>
        <LandingJudge/>
        <LandingContact/>
      </section>
      <Outlet/>
    </>
  );
}
