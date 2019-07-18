import React from "react";
import "./Card.css";

function Card(props) {
  console.log(props);
  return (
    <div className="card-container">
      <div className="card">
        <div>
          {" "}
          <img
            className="image"
            src={"https://robohash.org/" + props.id + "?200*200"}
          />
        </div>
        <div className="content-section">
          <h4>{props.name}</h4>

          <p className="glyphicon glyphicon-envelope">{props.email}</p>
          <p>{props.contact}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
