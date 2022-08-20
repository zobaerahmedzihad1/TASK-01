import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Header from "./Components/Header/Header";
import Courses from "./Components/Courses/Courses";
import JoinInstructor from "./Components/JoinInstructor/JoinInstructor";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";

function App() {
  return (
    <div>
      <NavBar />
      <Header/>
      <Courses/>
      <JoinInstructor/>
      <LeaderBoard/>
    </div>
  );
}

export default App;
