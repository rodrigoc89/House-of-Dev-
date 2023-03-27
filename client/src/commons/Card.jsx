import React from "react";
import "../styles/grid.css";

const Card = ({ home }) => {
  console.log(home);
  const test = [];
  const cardSize = {
    width: "18rem",
    height: "20rem",
  };
  return (
    <div
      className="card"
      style={{ ...cardSize, padding: "2%", margin: "0 auto" }}
    >
      <img src={home.image} alt="not found" />
      <p>adress: {home.address}</p>
      <p>avaible:{home.available ? " disponible" : " no disponible"} </p>
      <div className="favoriteCard">
        <p>price: {home.price}</p>
        <button>❤</button>
      </div>
    </div>
  );
};

export default Card;
