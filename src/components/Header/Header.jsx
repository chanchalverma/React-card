import React from "react";
import "./Header.css";

function Header(props) {
  // let bkcolor = {
  //   backgroundColor: +props.color
  // };
  console.log(props.color);
  return (
    <div className="header-container" style={{ backgroundColor: props.color }}>
      {/* <ul className="list-container">
        <li> Home</li>
        <li>Contact</li>
      </ul> */}
      <a class="active" href="#home">
        Home
      </a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
}
export default Header;
