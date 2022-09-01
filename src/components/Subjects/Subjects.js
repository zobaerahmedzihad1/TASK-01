import React from "react";
import file from "../../assets/file.png";
import "./Subjects.scss";

const Subjects = ({ subject }) => {
  return (
    <div className="subject__container">
      <img src={file} alt="img" />
      <p>{subject.name}</p>
    </div>
  );
};

export default Subjects;
