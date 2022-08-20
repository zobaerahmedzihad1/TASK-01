import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Header from "./Components/Header/Header";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <div>
      <NavBar />
      <Header/>
      <Courses/>
    </div>
  );
}

export default App;
