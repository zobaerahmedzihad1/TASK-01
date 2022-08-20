import React from "react";
// import bannerImg from "../../assets/header_img.jpg";
// import bannerImg from '../../assets/learning.jpg'
import bannerImg from '../../assets/e-learning-removebg-preview.png'
import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__content">
        <h4>
          Start your favourite courses for <span>Free</span>
        </h4>
        <h2>
          Now learning from <span>iShkool</span>
          <br />
          And build your bright career.
        </h2>
        <p>
          Start learning anything you want. Be the best. <br /> Make the world a
          better place!
        </p>
        <button>Start A Course</button>
      </div>
      <div className="header__img">
        <img src={bannerImg} alt="img" />
      </div>
    </div>
  );
};

export default Header;
