import React from "react";
import logo from "../../assets/logo.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar__content">
        <img src={logo} alt="logo" />
        <h2>iShkool</h2>
        <span>
          <button>Login</button>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
