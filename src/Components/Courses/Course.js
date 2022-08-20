import React from "react";
import "./Course.scss";

const Course = ({ course }) => {
  const { name, startDate, price, img } = course;
  return (
    <div className="subjects__container">
      <div className="subject__content">
        <h4>{name}</h4>
        <h6>{startDate}</h6>
        <h5>{price}</h5>
        {/* <div className="btn">
          <button className="see__details__btn">See Details</button>
          <button>Start Now</button>
        </div> */}
      </div>
      <div className="subject__img">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Course;
