import React from "react";
import "./styles_card.css";
import trash from "../../../asets/ButtonTrash.svg";

function Card({ description, type, value, removeTransaction }) {
  return (
    <li className="card-content">
      <div className="card-info">
        <h3>{description}</h3>
        <div className="total-btn">
          <p className="card-value">R$ {value}</p>
          <img
            onClick={() => removeTransaction(description)}
            src={trash}
            alt=""
          />
        </div>
      </div>
      <p>{type}</p>
    </li>
  );
}

export default Card;
