import React from "react";
import "./Card.css";

import Model from "./Model";

function Card(props) {
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
        <button
          className="button"
          onClick={() => props.onCardDelete(props.id)} //id value send to parent component's(CardList) function i.e CardList
        >
          Delete
        </button>
        <button
          className="button"
          onClick={() => props.onCardEdit(props.id, props.name, props.email)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
export default Card;
