import React from "react";
import logo from "../../assets/TSCDemoLogo.png";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar__container">
      <div className="brand__container">
        <img src={logo} alt="logo" />
        <div>
          <h2>Ishkool</h2>
          <h5>Dashboard 2022</h5>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
