import React,{useState} from "react";
import style from "./Navbar.module.css";
import logo from "./assets/discord.svg";
import Modal from "../Modal/Modal";
import Login from "../Forms/Login";
import Signup from "../Forms/Signup";
import { Link } from "react-router-dom";
// import { deauthenticateUser, isUserAuthenticated } from "../../../js/auth";

const Navbar = () => {
  const [show, setShow] = useState();
  const [open, setopen] = useState();
  const loginForm = <Login />;
  const signupForm = <Signup />;
  return (
    <div className={style.container}>
      <div><Link className={style.title} to="/">SolSec</Link></div>
      <div className={style.navList}>
        <ul>
          <li><a className={style.title} href="#landing-competition">Competitions</a></li>
          <li><a className={style.title} href="#landing-proposal">Submit Proposal</a></li>
          <li><a className={style.title} href="#landing-judge">Apply to be a Judge</a></li>
          <li>
            <div className={style.discord}>
              <img src={logo} alt="discord_logo" />
              <a href="https://discord.gg/KqPCHwKR" target="_blank" className={style.discord_link}>Join our Discord</a>
            </div>
          </li>

          {/* {isUserAuthenticated() ? (
            <a id="logout-btn" className="hamburger-menu-item" onClick={() => deauthenticateUser()}>Logout</a>
          ) : (
            <>
             <li>
            <button className={style.login} onClick={() => setShow(true)}>
              <Link className={style.loginbtn} to="/login">
              Login
              </Link>
            </button>
          </li>
            </>
          )} */}

          <li>
            <button className={style.login} onClick={() => setShow(true)}>
              <Link className={style.loginbtn} to="/login">
              Login
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
