import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/LandingPage/LandingPage";
import Contests from "./Components/ContestPage/Contests";
// import CreateContest from "./Components/ContestPage/CreateContest";
import StartProposal from "./Components/StartProposal/StartProposal";
import Contest from "./Components/ContestPage/Contest";
import Register from "./Components/Forms/Signup";
import Login from "./Components/Forms/Login";
import Signup from "./Components/Forms/Signup";
import Modal from "./Components/Modal/Modal";
import Competitions from "./Components/Competitions/Competitions";
import Compete from "./Components/Compete/Compete";
import FindingForm from "./Components/Forms/FindingForm";
import Judging from "./Components/Forms/Judging";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/contests" Component={Contests} />
      <Route path="/contest/:id" Component={Contest}></Route>
      <Route path="/createContest" Component={StartProposal} />
      <Route path="/competitions" element={<Competitions />} />
      <Route path="/compete/:id" element={<Compete />} />
      <Route path="/findingform" element={<FindingForm />} />
      <Route path="/landingjudge" element={<Judging />} />  
    </Routes>
  );
}

export default App;
