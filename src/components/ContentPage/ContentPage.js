import React, { useEffect, useState } from "react";
import ClassDetails from "../ClassDetails/ClassDetails";
import Subjects from "../Subjects/Subjects";

import "./ContentPage.scss";

const ContentPage = () => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    fetch("subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  return (
    <div className="content__container">
      <div className="header__content">
        <h5>Welcome to </h5>
        <h1>ISHKOOL.ORG</h1>
        <h4>Content Delivery System</h4>
      </div>
      <div className="subjects__container">
        {subjects.map((subject) => (
          <Subjects key={subject.name} subject={subject}></Subjects>
        ))}
      </div>
      <ClassDetails/>
    </div>
  );
};

export default ContentPage;
