import React, { useState } from "react";
import style from "./Login.module.css";
import InputBox from "../InputBox/InputBox";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [role, setRole] = useState("protocol");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("called1");
    e.preventDefault();
    axios
      .post("http://localhost:4000/auth/signup", {
        email: email,
        password: password,
        name: name,
        walletAddress: walletAddress,
        role: role,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err.response.data.message, ", status", err.response.status);
      });
    navigate("/");
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.header}>
          <h1>Signup</h1>
          <Link className={style.close} to="/">
            &times;
          </Link>
        </div>

        <section>
          {" "}
          <div>
            <form onSubmit={handleSubmit}>
              <label>Name*</label>
              <InputBox
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email ID*</label>
              <InputBox
                type="text"
                placeholder="Enter Your Email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Wallet Address*</label>
              <InputBox
                type="text"
                placeholder="Enter Your Wallet Address"
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <label>Create Password*</label>
              <InputBox
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Role*</label>
              <select
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="protocol">Protocol</option>
                <option value="auditor">Auditor</option>
                <option value="judge">Judge</option>
              </select>
              <button className={style.loginBtn} type="submit">
                Sign Up
              </button>
              <p className={style.signup}>
                Already have an account? <Link className={style.didntSign} to="/login">Login</Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
