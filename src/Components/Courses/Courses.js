import React, { useEffect, useState } from "react";
import Course from "./Course";
import "./Courses.scss";

const Courses = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  const selectedCourse = courses.slice(0, 6);

  useEffect(() => {
    setLoading(true);
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCourses(data);
      });
  }, []);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "200px" }}>
        Loading... Please wait!
      </h2>
    );
  }

  return (
    <div className="course__container">
      <div className="course__title">
        <div>
          <h2>
            All <span>Courses</span> of iShkool
          </h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search your course"
            autoComplete="off"
          />
          {/* <span className="search"><AiOutlineSearch /></span> */}
        </div>
      </div>
      <div className="single__course">
        {selectedCourse.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
      <button>See Other Courses</button>
    </div>
  );
};

export default Courses;
