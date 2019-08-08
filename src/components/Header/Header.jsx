import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-container" style={{ backgroundColor: props.color }}>
      <a class="active" href="#home">
        Home
      </a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
}
export default Header;
